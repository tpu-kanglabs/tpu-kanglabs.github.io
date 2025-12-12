import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { SITE } from '../../config';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function getStaticPaths() {
  const projects = await getCollection('projects');

  const pages = [
    { slug: 'index', title: SITE.labName, subtitle: SITE.description },
    { slug: 'projects', title: 'Projects', subtitle: 'Recent work from our lab' },
  ];

  const staticPaths = pages.map(page => ({
    params: { slug: page.slug },
    props: { title: page.title, subtitle: page.subtitle },
  }));

  const projectPaths = projects.map(project => ({
    params: { slug: `projects/${project.id.replace(/\.[^/.]+$/, '')}` },
    props: { title: project.data.title, subtitle: project.data.description },
  }));

  return [...staticPaths, ...projectPaths];
}

export async function GET({ params, props }: { params: any; props: any }) {
  const { title, subtitle } = props;
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : (params.slug || 'index');
  
  // Determine section for icon selection
  const section = slug.split('/')[0];

  // Load local fonts
  const fontData = await readFile(join(process.cwd(), 'public/fonts/Inter-Bold.woff'));
  const regularFontData = await readFile(join(process.cwd(), 'public/fonts/Inter-Regular.woff'));

  // Define icons for each section
  const icons: Record<string, string> = {
    index: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", // Home
    projects: "M4 6h16M4 12h16M4 18h7", // List
  };

  const iconPath = icons[section] || icons.index;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8fafc',
          backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                padding: '60px 100px',
                borderRadius: '30px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                position: 'relative',
                overflow: 'hidden',
              },
              children: [
                // Top Accent Line
                {
                  type: 'div',
                  props: {
                    style: {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '8px',
                      background: 'linear-gradient(90deg, #3182ce 0%, #63b3ed 100%)',
                    },
                  },
                },
                // Icon
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      backgroundColor: '#ebf8ff',
                      color: '#3182ce',
                      marginBottom: '30px',
                    },
                    children: [
                      {
                        type: 'svg',
                        props: {
                          width: '40',
                          height: '40',
                          viewBox: '0 0 24 24',
                          fill: 'none',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          children: [
                            {
                              type: 'path',
                              props: {
                                d: iconPath,
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                // Title
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '64px',
                      fontWeight: 700,
                      color: '#1a202c',
                      marginBottom: '16px',
                      textAlign: 'center',
                      letterSpacing: '-0.02em',
                    },
                    children: title,
                  },
                },
                // Subtitle
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '32px',
                      color: '#64748b',
                      textAlign: 'center',
                      maxWidth: '600px',
                      lineHeight: 1.4,
                    },
                    children: subtitle,
                  },
                },
                // Footer Branding
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '50px',
                      paddingTop: '30px',
                      borderTop: '2px solid #f1f5f9',
                      width: '100%',
                      justifyContent: 'center',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#3182ce',
                            marginRight: '12px',
                          },
                        },
                      },
                      {
                          type: 'div',
                          props: {
                            style: {
                              fontSize: '20px',
                              fontWeight: 600,
                              color: '#475569',
                              letterSpacing: '0.05em',
                              textTransform: 'uppercase',
                            },
                            children: SITE.title,
                          },
                        },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    } as any,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: regularFontData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });

  const image = resvg.render();

  return new Response(image.asPng() as any, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
