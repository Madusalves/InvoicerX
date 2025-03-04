import express, {Response, Request} from "express"
import dotenv from "dotenv"
import multer from "multer"
import fs from "fs"
import pdfParse from "pdf-parse"; // extract texts from PDFs
import path from "path";

dotenv.config() //  zero-dependency module that loads environment

const app = express()
const upload = multer({dest: "uploads/"})  // multer for uploading files 

// config the AWS s3


// Extraction of data of the PDF
const extractData = async (pdfPath: string) => {
    const dataBuffer = fs.readFileSync(pdfPath)
    const pdfData = await pdfParse(dataBuffer)

    return{
        text: pdfData.text, //text 
        metadata: pdfData.info, // metadata of the pdf
    }
}

app.listen(3000, () => console.log("running on 3000"));