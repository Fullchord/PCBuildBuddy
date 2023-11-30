
class PcComponent:
    def __init__(self, id, type, name, description, price, manufacturer, specs: dict):
        self.id = id;
        self.type = type;
        self.name = name;
        self.description = description;
        self.price = price;
        self.manufacturer = manufacturer;
        self.specs = specs


    def fromDict(d):
        common = ['id', 'type', 'name', 'description', 'price', 'manufacturer']
        specs = dict()
        # Find all specification attributes
        for key in d.keys():
            if key in common:
                continue
            specs[key] = d[key]

        return PcComponent(
            d['id'], d['type'],
            d['name'], d['description'],
            d['price'], d['manufacturer'],
            specs
        )

    def toDict(self):
        return {
            "id": self.id,
            "type": self.type,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "manufacturer": self.manufacturer,
            "specs": self.specs
        }