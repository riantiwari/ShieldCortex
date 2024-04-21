import csv
import spacy

def main():
    nlp = spacy.load("en_core_web_sm")
    contracts = load_data("contracts.csv")
    contracts = [','.join(contract) for contract in contracts]
    for contract in contracts:
        doc = nlp(contract)
        for ent in doc.ents:
            print(ent.text, ent.label_)
    #contracts = [[token.text for token in nlp(','.join(contract)) if not token.is_stop] for contract in contracts]


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

