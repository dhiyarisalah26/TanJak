import pandas as pd
from bs4 import BeautifulSoup
import requests
from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get('/datapangan')
def Harga_Pangan():

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

@app.get('/datacovid')

def total_positif():
    df = pd.read_csv(('datacovid.csv'), error_bad_lines=False)
    df['date']='5 Desember 2022'
    df_top10=df.groupby(['date','nama_provinsi','nama_kota','nama_kecamatan'])[['positif','sembuh','meninggal']].sum().reset_index()
    df_top10['Rank'] = df_top10['positif'].rank(method='dense', ascending=False)
    df_top10=df_top10.sort_values('Rank').head(11)
    df_dict=df_top10.to_dict(orient="records")
    result = df_dict
    return result

@app.get("/jumlahpenduduk_perkota")
#menampilkan perbandingan jumlah kelahiran di setiap kota
def penduduk_perkota():  
    df = pd.read_csv(('datajumlahpenduduk.csv'), error_bad_lines=False)
    kota = pd.DataFrame(df.groupby('nama_kabupaten/kota')[['jumlah']].sum()).reset_index() 
    df_str = kota.astype(str)
    df_str.reset_index(drop=True, inplace=True)
    data = df_str.to_dict('records')
    return data

@app.get("/jumlahpenduduk_perpekerjaan")
#menampilkan perbandingan jumlah kelahiran di setiap kota
def penduduk_perkota():  
    df = pd.read_csv(('datajumlahpenduduk.csv'), error_bad_lines=False)
    kota = pd.DataFrame(df.groupby('jenis_pekerjaan')[['jumlah']].sum()).reset_index() 
    df_str = kota.astype(str)
    df_str.reset_index(drop=True, inplace=True)
    data = df_str.to_dict('records')
    return data

# @app.get("/perbandinganGender")
# #menampilkan perbandingan jumlah kelahiran untuk setiap gender
# def perbandingan_gender():
#     gender = pd.DataFrame(df.groupby('jenis_kelamin')[['jumlah']].sum()).reset_index() 
#     df_str = gender.astype(str)
#     df_str.reset_index(drop=True, inplace=True)
#     data = df_str.to_dict('records')
#     return data

# @app.get("/perbandinganTempatLahir")
# #menampilkan perbandingan jumlah kelahiran untuk setiap tempat lahir
# def perbandingan_tempat_Lahir():
#     tempat = pd.DataFrame(df.groupby('wilayah')[['jumlah']].sum()).reset_index() 
#     df_str = tempat.astype(str)
#     df_str.reset_index(drop=True, inplace=True)
#     data = df_str.to_dict('records')
#     return data
    
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
