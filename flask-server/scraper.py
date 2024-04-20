import requests
from bs4 import BeautifulSoup
import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By


def main(headers):
    
    driver = webdriver.Edge()
    driver.get('https://www.defense.gov/News/Contracts/')

    links = driver.find_elements(By.XPATH, "//h3[@class='title']/a")
    morelinks = [link.get_attribute('href') for link in links]
    filtered_links = [link for link in morelinks if '/Releases/Release' not in link]
    for link in filtered_links:
        scrape_page(link)
    print(filtered_links)
    # Iterate through each <a> tag and print its href attribute
    # for link in links:
    #     href = link.get_attribute('href')
    #     if href:
    #         print(href)

    # Close the WebDriver
    driver.quit()

    # page = requests.get('https://www.defense.gov/News/Contracts/Contract/Article/3749216/', headers=headers)
    # soup = BeautifulSoup(page.text, 'html.parser')
    # scrape_page("https://www.defense.gov/News/Contracts/Contract/Article/3749216/")

    # links = soup.find_all('a')
    # print(links)
    # for link in links:
    #     print(link.get('href'))
    


def scrape_page(url):
    scrapePara = requests.get(url, headers=headers)
    paraSoup = BeautifulSoup(scrapePara.text, "html.parser")
    paraList = paraSoup.find_all('p')
    for para in paraList:
        print(para)
        print()
        

if __name__ == "__main__":
    headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
    }
    main(headers)























































































#fat fuck code here
#def scrape_page(url)
