var parquet = require('parquetjs');
async function writeParquetFile() {

        var schema = new parquet.ParquetSchema({
            name: { type: 'UTF8' },
            quantity: { type: 'INT64' },
            price: { type: 'DOUBLE' },
            date: { type: 'TIMESTAMP_MILLIS' },
            in_stock: { type: 'BOOLEAN' }
        });

        // create new ParquetWriter that writes to 'fruits.parquet`
        var writer = await parquet.ParquetWriter.openFile(schema, 'fruits.parquet');
        
        // append a few rows to the file
        await writer.appendRow({name: 'apple22s', quantity: 10, price: 2.5, date: new Date(), in_stock: true});
        await writer.appendRow({name: 'oranges', quantity: 10, price: 2.5, date: new Date(), in_stock: true});
        await writer.close();
    }

    async function readParquetFile() {
        let reader = await parquet.ParquetReader.openFile('fruits.parquet');
        
        // create a new cursor
        let cursor = reader.getCursor();
        
        // read all records from the file and print them
        let record = null;
        while (record = await cursor.next()) {
        console.log(record);
        }
        await reader.close();
    }
async function example() {
await writeParquetFile();
readParquetFile();
}
example();