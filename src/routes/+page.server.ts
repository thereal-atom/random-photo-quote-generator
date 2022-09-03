import { error } from "@sveltejs/kit";
import quotes from "$lib/quotes";
import glob from "glob";
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const images: string[] = [];

    glob("static/images/*", (er, files) => {
        files.forEach(file => {
            images.push(file.replace("static/", ""));
        });

        if (er) throw error(500, er.message);
    });

    return {
        quotes,
        images,
    };
};