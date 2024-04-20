import requests
from bs4 import BeautifulSoup

headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
    }
def main():

    page = requests.get('https://www.defense.gov/News/Contracts/Contract/Article/3749216/', headers=headers)
    soup = BeautifulSoup(page.text, 'html.parser')
    scrape_page("https://www.defense.gov/News/Contracts/Contract/Article/3749216/")


def scrape_page(url):
    scrapePara = requests.get(url, headers=headers)
    paraSoup = BeautifulSoup(scrapePara.text, "html.parser")
    paraList = paraSoup.find_all('p')
    for para in paraList:
        print(para)
        print()
        

if __name__ == "__main__":
    main()























































































#fat fuck code here
#def scrape_page(url):
>>>>>>> 9aba627aa60af93f17cfabfb345dda2eec9638df
