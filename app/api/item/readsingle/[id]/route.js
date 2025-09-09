import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";

export async function GET(request, context) {
    const { id } = context.params;

    try {
        await connectDB();
        const singleItem = await ItemModel.findById(id);
        return NextResponse.json({ message: "Success reading item", singleItem: singleItem });
    } catch (error) {
        return NextResponse.json({ message: "Error reading item" }, { status: 500 });
    }
}