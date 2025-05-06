import Navlist from '@/components/Navlist';
import entertainment from '@/constants/entertainment';

import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Lovestories",
  };

export default function LoveStoriesPage() {
  return (
    <>
      <Navlist posts={entertainment} sectionTitle="LOVE STORIES" />
    </>
  );
}
