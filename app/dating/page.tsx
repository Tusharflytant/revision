import Navlist from '@/components/Navlist';
import usNews from '@/constants/usnews';

import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Dating",
  };

export default function LoveStoriesPage() {
  return (
    <>
      <Navlist posts={usNews} sectionTitle="DATING" />
    </>
  );
}
