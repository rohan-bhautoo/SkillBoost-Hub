import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const categories = await prisma.category.findMany({
    include: {
      categorySubcategories: {
        include: {
          subCategory: true,
        },
      },
    },
  });

  return NextResponse.json(categories);
}
