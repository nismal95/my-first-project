import clientPromise from "@/app/libs/mongodb";
import { NextResponse } from "next/server";

const MOVIES = [
  { id: 1, title: "Harry Potter 1" },
  { id: 2, title: "Load of the Ring" },
  { id: 3, title: "Hobbit" },
  { id: 4, title: "Insteller" },
  { id: 5, title: "Harry Potter 2" },
  { id: 6, title: "Harry Potter 3" },
  { id: 7, title: "Harry Potter 5" },
  { id: 8, title: "Visal Adare" },
];

export const GET = async (reg) => {
  //Get  Movies from the MongoDB
  try {
    const client = await clientPromise();

    //sample mflix is the database name
    const db = client.db("sample_mflix");

    //fetch movies from the datbase
    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacrific: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(movies);
  } catch (error) {
    console.log("MONGODB ERROR", error);
    return NextResponse.json(
      { error: "Internal server Error" },
      { status: 500 }
    );
  }
};
