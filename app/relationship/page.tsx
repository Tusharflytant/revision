import Navlist from '@/components/Navlist';
import money from '@/constants/money';

import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Relationship",
  };

export default function LoveStoriesPage() {
  return (
    <>
      <Navlist posts={money} sectionTitle="RELATIONSHIP" />
    </>
  );
}
