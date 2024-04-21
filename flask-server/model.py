import csv
import spacy

def main():
    nlp = spacy.load("en_core_web_sm")
    contracts = load_data("contracts.csv")

    contracts = [[token.text for token in nlp(','.join(contract)) if not token.is_stop] for contract in contracts]
    print(contracts) 


def load_data(filename):
    contracts = []
    with open(filename, 'r', encoding='utf-8') as file: 
        reader = csv.reader(file, delimiter=",")
        next(reader)  
        for row in reader:
            if row:  
                contracts.append(row)
    return contracts

if __name__ == "__main__":
    main()

