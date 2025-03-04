
# Invoice Processing System

## Description

The goal of this project is to develop a scalable and resilient system for processing invoices in PDF format, efficiently extracting and storing relevant data. The system will be able to:

- Receive invoices in PDF format through an API or web interface.
- Extract key data from the invoices, such as:
  - Installation number
  - Address
  - Items
  - Dates
  - Total value
- Convert the extracted data into JSON format.
- Store both the PDF files and the JSON data in a cloud storage service.

## Requirements

1. **Invoice Reception:**
   - The API or web interface should be capable of receiving invoices in PDF format.
   
2. **Data Extraction:**
   - The system should be able to identify and extract relevant data from the PDF, such as:
     - Installation number
     - Address
     - Items
     - Dates
     - Total value
   
3. **Conversion to JSON:**
   - After extraction, the data should be converted into JSON format, making it easier to process and manipulate the information.

4. **Storage:**
   - The system should be capable of storing both the PDF files and the extracted data (in JSON format) in a cloud storage service (such as AWS S3, Google Cloud Storage, etc.).


# 📄 DataBuffer for Synchronized PDF Reading

## 🔍 Why Use a DataBuffer?
A **DataBuffer** improves performance and consistency when reading large PDFs by managing data chunks efficiently.

### 🎯 Benefits:
- ⚡ **Efficiency**: Reads in smaller blocks, optimizing memory usage.
- 🔄 **Order Preservation**: Ensures sequential data processing.
- ⚙️ **Parallelism**: Safely distributes workload across threads.
- ⏳ **Low Latency**: Prepares data while reading continues.
- 📈 **Scalability**: Handles large data volumes seamlessly.

### 🛠️ How It Works:
1. 📥 PDF is read in chunks.
2. 🗂️ Chunks are temporarily stored in the DataBuffer.
3. 🔄 Threads consume chunks sequentially.
4. ✅ DataBuffer manages order and availability.

### 💻 Installation:
```bash
npm install pdf-parse
```

### 📌 When to Use:
- Large document processing.
- ETL pipelines.
- Text extraction and analysis.

With **DataBuffer**, your PDF data processing becomes faster, synchronized, and scalable!