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
    contracts = []
    for link in filtered_links:
        conArr = scrape_contracts(link)
        for con in conArr:
            contracts.append(con)
    for contract in contracts:
        contract = contract.get_text()
        print(contract)
        print()

    # Close the WebDriver
    driver.quit()

#contracts = []
#for link in links:
    #conArr = scrape_contracts(link)
    #for con in conArr:
        #contracts.append(con)
#csv_file = open('contracts.csv', 'w', encoding='utf-8', newline='')
# initializing the writer object to insert data
# in the CSV file
# writer = csv.writer(csv_file)

# # writing the header of the CSV file
# writer.writerow(['Text', 'Author', 'Tags'])

# # writing each row of the CSV
# for quote in quotes:
#     writer.writerow(quote.values())

# # terminating the operation and releasing the resources
# csv_file.close()

"""
Function to scrape text content from paragraph tags within the body of the page highlighting each
of the contracts of the DOD on a certain date.

Args:
    url (str): The URL of the web page to be scraped.

Returns:
    list: A list of strings, each representing the text content of a paragraph tag.
"""
def scrape_contracts(url):
    # Send an HTTP request to the provided URL and store the response.
    scrapeCon = requests.get(url, headers=headers)

    # Parse the HTML content of the response using Beautiful Soup with the 'html.parser'.
    conSoup = BeautifulSoup(scrapeCon.text, "html.parser")
    
    # Find all paragraph ('<p>') elements that are within the '<body>' of the HTML document.
    conList = conSoup.find("body").find_all("p")
    
    # Iterate through each paragraph element found.
    for con in conList:
        # Extract and store the text content of the paragraph, removing HTML tags.
        con = con.get_text()
        
        # # Print the text content of the paragraph to the console.
        # print(con)
        
        # # Print an empty line for better readability in the console output.
        # print()
    
    # Return the list of text contents of all paragraph tags.
    return conList


if __name__ == "__main__":
    headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
    }
    main(headers)























































































#fat fuck code here
#def scrape_page(url)
