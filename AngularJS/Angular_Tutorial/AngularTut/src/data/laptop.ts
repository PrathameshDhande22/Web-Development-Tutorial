export type Laptop = {
  name: string,
  processor: string,
  ram: string,
  rom: string,
  storageType: "SSD" | "HDD",
  processorCompany: "Intel" | "Ryzen" | "Apple",
  price: number,
  stock: number,
  brandName: string
};

export const laptops: Laptop[] = [
  {
    name: "MacBook Air M1",
    processor: "M1 Chip",
    ram: "8GB",
    rom: "256GB",
    storageType: "SSD",
    processorCompany: "Apple",
    price: 999,
    stock: 5,
    brandName: "Apple"
  },
  {
    name: "Dell XPS 13",
    processor: "Intel i7-1165G7",
    ram: "16GB",
    rom: "512GB",
    storageType: "SSD",
    processorCompany: "Intel",
    price: 1350,
    stock: 8,
    brandName: "Dell"
  },
  {
    name: "HP Spectre x360",
    processor: "Intel i7-10510U",
    ram: "16GB",
    rom: "1TB",
    storageType: "SSD",
    processorCompany: "Intel",
    price: 1500,
    stock: 12,
    brandName: "HP"
  },
  {
    name: "Asus ZenBook 14",
    processor: "AMD Ryzen 7 5800H",
    ram: "16GB",
    rom: "512GB",
    storageType: "SSD",
    processorCompany: "Ryzen",
    price: 1200,
    stock: 0,
    brandName: "Asus"
  },
  {
    name: "Acer Aspire 7",
    processor: "AMD Ryzen 5 3550H",
    ram: "8GB",
    rom: "512GB",
    storageType: "SSD",
    processorCompany: "Ryzen",
    price: 850,
    stock: 15,
    brandName: "Acer"
  },
  {
    name: "MacBook Pro M2",
    processor: "M2 Chip",
    ram: "16GB",
    rom: "512GB",
    storageType: "SSD",
    processorCompany: "Apple",
    price: 1999,
    stock: 3,
    brandName: "Apple"
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    processor: "Intel i5-1135G7",
    ram: "8GB",
    rom: "256GB",
    storageType: "SSD",
    processorCompany: "Intel",
    price: 1200,
    stock: 0,
    brandName: "Lenovo"
  },
  {
    name: "MSI GF65 Thin",
    processor: "Intel i7-10750H",
    ram: "16GB",
    rom: "512GB",
    storageType: "SSD",
    processorCompany: "Intel",
    price: 1100,
    stock: 9,
    brandName: "MSI"
  },
  {
    name: "HP Omen 15",
    processor: "AMD Ryzen 7 5800H",
    ram: "16GB",
    rom: "1TB",
    storageType: "SSD",
    processorCompany: "Ryzen",
    price: 1600,
    stock: 6,
    brandName: "HP"
  },
  {
    name: "Apple MacBook Air M2",
    processor: "M2 Chip",
    ram: "8GB",
    rom: "256GB",
    storageType: "SSD",
    processorCompany: "Apple",
    price: 1200,
    stock: 2,
    brandName: "Apple"
  },
  {
    name: "Acer Nitro 5",
    processor: "Intel i5-10300H",
    ram: "8GB",
    rom: "1TB",
    storageType: "HDD",
    processorCompany: "Intel",
    price: 900,
    stock: 20,
    brandName: "Acer"
  },
  {
    name: "Lenovo Legion 5",
    processor: "AMD Ryzen 5 4600H",
    ram: "16GB",
    rom: "512GB",
    storageType: "SSD",
    processorCompany: "Ryzen",
    price: 1100,
    stock: 0,
    brandName: "Lenovo"
  },
  {
    name: "Dell Inspiron 15",
    processor: "Intel i5-11300H",
    ram: "8GB",
    rom: "512GB",
    storageType: "SSD",
    processorCompany: "Intel",
    price: 750,
    stock: 10,
    brandName: "Dell"
  },
  {
    name: "Asus ROG Strix G15",
    processor: "AMD Ryzen 9 5900HX",
    ram: "16GB",
    rom: "1TB",
    storageType: "SSD",
    processorCompany: "Ryzen",
    price: 2000,
    stock: 7,
    brandName: "Asus"
  },
  {
    name: "HP Pavilion 15",
    processor: "Intel i7-1165G7",
    ram: "16GB",
    rom: "512GB",
    storageType: "SSD",
    processorCompany: "Intel",
    price: 1050,
    stock: 0,
    brandName: "HP"
  },
  {
    name: "Microsoft Surface Laptop 4",
    processor: "Intel i5-1145G7",
    ram: "8GB",
    rom: "256GB",
    storageType: "SSD",
    processorCompany: "Intel",
    price: 1000,
    stock: 4,
    brandName: "Microsoft"
  },
  {
    name: "MacBook Pro M1 Max",
    processor: "M1 Max Chip",
    ram: "32GB",
    rom: "1TB",
    storageType: "SSD",
    processorCompany: "Apple",
    price: 3299,
    stock: 0,
    brandName: "Apple"
  },
  {
    name: "MSI Prestige 14",
    processor: "Intel i7-1185G7",
    ram: "16GB",
    rom: "512GB",
    storageType: "SSD",
    processorCompany: "Intel",
    price: 1400,
    stock: 8,
    brandName: "MSI"
  },
  {
    name: "Razer Blade 15",
    processor: "Intel i7-10750H",
    ram: "16GB",
    rom: "1TB",
    storageType: "SSD",
    processorCompany: "Intel",
    price: 2500,
    stock: 5,
    brandName: "Razer"
  },
  {
    name: "Asus VivoBook 15",
    processor: "Intel i3-1005G1",
    ram: "4GB",
    rom: "128GB",
    storageType: "SSD",
    processorCompany: "Intel",
    price: 450,
    stock: 18,
    brandName: "Asus"
  }
];
