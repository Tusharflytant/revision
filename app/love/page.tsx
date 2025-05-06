import Navlist from '@/components/Navlist';
import money from '@/constants/money';

import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Love & Lifestyle",
  };

export default function LoveStoriesPage() {
  return (
    <>
      <Navlist posts={money} sectionTitle="LOVE & LIFESTYLE" />
    </>
  );
}
