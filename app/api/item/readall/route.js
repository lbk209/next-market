import { NextResponse } from "next/server";
import connetDB from "../../../utils/database";
import {ItemModel} from "../../../utils/schemaModels";

export async function GET() {
  try {
    await connetDB();
    const allItems = await ItemModel.find();
    return NextResponse.json({message: "Success reading all items", allItems: allItems})
    } catch (error) {
    return NextResponse.json({ message: "Error reading all items"});
  }
}

export const revalidate = 0; // Disable caching, always fetch fresh data