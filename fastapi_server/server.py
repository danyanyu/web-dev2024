from fastapi import FastAPI
from fastapi.responses import FileResponse
from pathlib import Path
import typing
import asyncpg
import asyncio
#from pydantic import BaseModel

app = FastAPI()

folder = "./imglib/"

@app.get("/api/get_image/{filename}")
async def get_image(filename: str):
    image_path = Path(folder+filename)
    if not image_path.is_file():
        print('file',filename, 'not found')
        return FileResponse(Path(folder+"placeholder.jpg"))
    return FileResponse(image_path)


@app.get('/api/all')
async def get_all():
    pool = await asyncpg.create_pool(user='postgres', password='danya', database='postgres', host='localhost')
    async with pool.acquire() as conn:
        result = await conn.fetch('SELECT * from gallery')
        #print(result)

    await pool.close()
    return result

@app.get('/api/watercolors')
async def get_watercolor():
    pool = await asyncpg.create_pool(user='postgres', password='danya', database='postgres', host='localhost')
    async with pool.acquire() as conn:
        result = await conn.fetch('SELECT id, filename, title, tech, year, hash from gallery WHERE page = $1', 'watercolor')
        #print(result)

    await pool.close()
    return result

@app.get('/api/graphics')
async def get_graphic():
    pool = await asyncpg.create_pool(user='postgres', password='danya', database='postgres', host='localhost')
    async with pool.acquire() as conn:
        result = await conn.fetch('SELECT id, filename, title, tech, year, hash  from gallery WHERE page = $1', 'graphic')
        #print(result)

    await pool.close()
    return result

@app.get('/api/digital')
async def get_digital():
    pool = await asyncpg.create_pool(user='postgres', password='danya', database='postgres', host='localhost')
    async with pool.acquire() as conn:
        result = await conn.fetch('SELECT id, filename, title, tech, year, hash from gallery WHERE page = $1', 'digital')
        #print(result)

    await pool.close()
    return result


