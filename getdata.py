import pandas as pd
from bs4 import BeautifulSoup
import requests
from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get('/')
def home():

    url = 'https://hargapangan.id/tabel-harga/pasar-tradisional/daerah'
    page = requests.get(url)
    soup = BeautifulSoup(page.text, 'html.parser')
    table = soup.find('table')

    table_rows = table.find_all('tr')
    list_column = []
    for i in table_rows[0].find_all('th'):
        list_column.append(i.contents[0])

    res = []
    for tr in table_rows:
        td = tr.find_all('td')
        row = [tr.text.strip() for tr in td if tr.text.strip()]
        if row:
            res.append(row)

    df = pd.DataFrame(res, columns=list_column)

    res = df[df.columns[1:]].to_dict(orient='records')
    return res


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
