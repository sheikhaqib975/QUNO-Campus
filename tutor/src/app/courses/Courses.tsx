'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import aicourse from './assets/images/aicourse.png';
import graphicdesigning from './assets/images/graphicdesigning.png';
import autocad from './assets/images/autocad.png';
import dd from './assets/images/dd.png';
import networking from './assets/images/networking.png';
import quran from './assets/images/quran.png';
import web from './assets/images/web.png';
import eng from './assets/images/eng.png';
import acc from './assets/images/acc.png';
import C from './assets/images/C.png';
import calculus from './assets/images/calculus.png';
import biology from './assets/images/biology.png';
import physics from './assets/images/physics.png';
import office from './assets/images/office.png';

import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '16px',
    width: '300px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  courseTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '12px',
  },
  courseStudents: {
    color: '#555',
    marginTop: '8px',
    marginBottom: '8px',
  },
  courseRating: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    marginBottom: '12px',
  },
  star: {
    color: '#fbbf24',
    fontSize: '18px',
  },
  courseButton: {
    backgroundColor: '#0ea5e9',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 500,
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '180px',
    overflow: 'hidden',
    borderRadius: '8px',
  },
};

interface CourseCardProps {
  title: string;
  desc: string;
  tag: string;
  image: any;
  path: string;
}

function CourseCard({ title, desc, tag, image, path }: CourseCardProps) {
  const router = useRouter();

  return (
    <div style={styles.courseCard}>
      <div style={styles.imageWrapper}>
        <Image src={image} alt={`${title} Image`} layout="fill" objectFit="cover" />
      </div>
      <h3 style={styles.courseTitle}>{title}</h3>
      <p style={styles.courseStudents}>{desc}</p>
      <div style={styles.courseRating}>
        <span style={styles.star}>★</span>
        <span>{tag}</span>
      </div>
      <button style={styles.courseButton} onClick={() => router.push(path)}>
        Learn More
      </button>
    </div>
  );
}

export default function Courses() {
  const courseList: CourseCardProps[] = [
    { title: 'C++', desc: 'Programming Essentials', tag: 'Logical', image: C, path: '/courses/cpp' },
    { title: 'AI', desc: 'Introduction to AI', tag: 'Intelligent', image: aicourse, path: '/courses/ai' },
    { title: 'Networking', desc: 'Computer Networks', tag: 'Infrastructure', image: networking, path: '/courses/networking' },
    { title: 'Graphic Designing', desc: 'Design Tools & Creativity', tag: 'Creative', image: graphicdesigning, path: '/courses/graphic' },
    { title: 'Quran', desc: 'Tajweed and Tafsir', tag: 'Spiritual', image: quran, path: '/courses/quran' },
    { title: 'AutoCAD', desc: '2D/3D Designing', tag: 'Technical', image: autocad, path: '/courses/autocad' },
    { title: 'Web Development', desc: 'Full Stack Projects', tag: 'Development', image: web, path: '/courses/web' },
    { title: 'English', desc: 'Language Proficiency', tag: 'Linguistic', image: eng, path: '/courses/eng' },
    { title: 'Accounting', desc: 'Financial Management', tag: 'Business', image: acc, path: '/courses/acc' },
    { title: 'Calculus', desc: 'Advanced Mathematics', tag: 'Analytical', image: calculus, path: '/courses/calculus' },
    { title: 'Biology', desc: 'Life Sciences', tag: 'Scientific', image: biology, path: '/courses/biology' },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
      {courseList.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
}
