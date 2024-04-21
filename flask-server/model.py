import csv
import spacy

def main():
    nlp = spacy.load("en_core_web_lg")
    
    contracts = load_data("contracts.csv")
    contracts = [','.join(contract) for contract in contracts]
    for contract in contracts:
        doc = nlp(contract)
        if not doc.ents or doc.ents[0].label_ != "ORG":
            continue
        locations = getLocations(doc, nlp)
        money = ""
        if not locations:
            continue
        for ent in doc.ents:   
            if ent.label_ == "MONEY":
                money = ent.text
                break
        synopsis = getSynopsis(doc, nlp)
        print(doc.ents[0].text, locations, money, synopsis)
        print()
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

def getSynopsis(doc, nlp):
    first_two_sentences = list(doc.sents)[:1]

    synopsis = " ".join(str(sent) for sent in first_two_sentences)
    return synopsis

def getLocations(doc, nlp):
    found_flag = False
    locs = []

    # Iterate through the tokens
    for i, token in enumerate(doc):
        # Check if the token text is "work will be performed"
        if not found_flag:
            if token.text.lower() == "work" and doc[i+1].text.lower() == "will" and doc[i+2].text.lower() == "be" and doc[i+3].text.lower() == "performed":
                found_flag = True
                combined_string = ' '.join([t.text for t in doc[i:i+50]])

        if found_flag:
            # Extract locations from the combined string
            for t in nlp(combined_string).ents:
                if t.label_ == "GPE" or t.label_ == "FAC":
                    locs.append(t.text)

            # Break the loop after processing the combined string
            break

    return locs
        
    




if __name__ == "__main__":
    main()

