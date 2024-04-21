import csv
              
def main():
    contracts = load_data("contracts.csv")
    contracts = [','.join(contract) for contract in contracts]
    for contract in contracts:
        print(contract) 

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
