export const categories = [
  {
    id: 'restauration',
    name: 'Restauration',
    image: '/category-restaurant.jpg',
    description: 'Solutions professionnelles pour restaurants : équipements de cuisine, ustensiles, et matériel de service haut de gamme.',
    hasSubcategories: true,
    subcategories: [
      {
        id: 'harissa',
        name: 'Harissa',
        products: [
          { id: 1, name: 'Harissa Tharhira', brand: 'Tharhira', image: '/PRODOUI brc/Restoration/THARHIRA.png', description: 'Harissa traditionnelle tunisienne, pimentée et savoureuse, parfaite pour accompagner vos plats.' },
        ]
      },
      {
        id: 'thon',
        name: 'Thon',
        products: [
          { id: 4, name: 'Thon El Bahar', brand: 'Thon El Bahar', image: '/PRODOUI brc/Restoration/THONE EL BAHAR.png', description: 'Thon de qualité supérieure, source de protéines de qualité.' },
          { id: 5, name: 'Thon El Fakhama', brand: 'Thon El Fakhama', image: '/PRODOUI brc/Restoration/THONE EL FAKHAMA.png', description: 'Thon premium, savoureux et onctueux.' },
          { id: 6, name: 'Thon Sidi Ali', brand: 'Sidi Ali', image: '/PRODOUI brc/Restoration/THONE SIDI ALI.png', description: 'Thon nature de qualité, goût authentique.' },
          { id: 7, name: 'Thon Zad El Bahar', brand: 'Zad El Bahar', image: '/PRODOUI brc/Restoration/THONE ZAD EL BAHAR.png', description: 'Thon en conserve, parfait pour vos préparations.' },
        ]
      },
      {
        id: 'mozzarella',
        name: 'Mozzarella',
        products: [
          { id: 8, name: 'Bona Mozzarella', brand: 'Bona', image: '/PRODOUI brc/Restoration/BONA MOZARELA.png', description: 'Fromage mozzarella frais, idéal pour pizzas et salades.' },
          { id: 9, name: 'Le Fondant Mozzarella', brand: 'Le Fondant', image: '/PRODOUI brc/Restoration/L FANDONT MOZARELA.png', description: 'Mozzarella de qualité premium, texture fondante.' },
          { id: 10, name: 'Mozzarella Arbi', brand: 'Arbi', image: '/PRODOUI brc/Restoration/MOZARELA ARBI.png', description: 'Mozzarella traditionnelle, goût authentique.' },
          { id: 11, name: 'Mozza Pizza', brand: 'Mozza Pizza', image: '/PRODOUI brc/Restoration/MOZZA PIZZA.png', description: 'Mozzarella spéciale pizza, fonte parfaite.' },
        ]
      },
      {
        id: 'mayonnaise',
        name: 'Mayonnaise',
        products: [
          { id: 12, name: 'Bonna Mayonnaise', brand: 'Bonna', image: '/PRODOUI brc/Restoration/BONNA MAYOUNESE.png', description: 'Mayonnaise crémeuse et onctueuse, parfaite pour sandwiches.' },
          { id: 13, name: 'Mayolite', brand: 'Mayolite', image: '/PRODOUI brc/Restoration/MAYOLITE.png', description: 'Mayonnaise allégée, moins de calories, même goût.' },
          { id: 14, name: 'Mayolla', brand: 'Mayolla', image: '/PRODOUI brc/Restoration/MAYOLLA.png', description: 'Mayonnaise de qualité, goût raffiné.' },
        ]
      },
      {
        id: 'salade-grilles',
        name: 'Salade Grillés',
        products: [
          { id: 15, name: 'Salade Algérienne', brand: 'Sauca Algérienne', image: '/PRODOUI brc/Restoration/SAUCA ALGERIENNE.png', description: 'Salade algérienne traditionnelle, prête à consommer.' },
          { id: 16, name: 'Edame', brand: 'Edame', image: '/PRODOUI brc/Restoration/EDAME.png', description: 'Edamame de qualité, parfait pour vos salades.' },
        ]
      },
      {
        id: 'sauces',
        name: 'Sauces',
        products: [
          { id: 17, name: 'Sauce Pizza', brand: 'Sauce Pizza', image: '/PRODOUI brc/Restoration/SAUCE PIZZA.png', description: 'Sauce tomate spéciale pizza, goût authentique.' },
          { id: 18, name: 'Sauce Barbecue', brand: 'Sauce Barbacio', image: '/PRODOUI brc/Restoration/SAUCE BARBACIO.png', description: 'Sauce barbecue, goût fumé et sucré.' },
          { id: 19, name: 'Sauce à l\'Ail', brand: 'Sauce à l\'Ail', image: '/PRODOUI brc/Restoration/SAUCE A LAIL.png', description: 'Sauce à l\'ail crémeuse, parfaite pour vos plats.' },
          { id: 20, name: 'Sauce Cheese', brand: 'Sauce Cheese', image: '/PRODOUI brc/Restoration/SAUCE SHEESE.png', description: 'Sauce fromagère onctueuse, idéale pour nachos et burgers.' },
          { id: 21, name: 'Sauce Fruité', brand: 'Sauce Frute', image: '/PRODOUI brc/Restoration/SAUCE FRUTE.png', description: 'Sauce fruitée sucrée-salée, accompagnement original.' },
          { id: 22, name: 'Ketchup', brand: 'Khatchap', image: '/PRODOUI brc/Restoration/KHATCHAP.png', description: 'Ketchup de qualité, goût tomate authentique.' },
          { id: 23, name: 'Dolla Sauce', brand: 'Dolla', image: '/PRODOUI brc/Restoration/DOLLA SAUCE.png', description: 'Sauce spéciale, goût unique et savoureux.' },
        ]
      },
      {
        id: 'charcuteries',
        name: 'Charcuteries',
        products: [
          { id: 24, name: 'Jambon', brand: 'Jambon', image: '/PRODOUI brc/Restoration/JAMBON.png', description: 'Jambon de qualité supérieure, parfait pour sandwiches et pizzas.' },
          { id: 25, name: 'Salami', brand: 'Salami', image: '/PRODOUI brc/Restoration/SALAMI.png', description: 'Salami traditionnel, goût authentique et savoureux.' },
        ]
      },
      {
        id: 'fromages',
        name: 'Fromages',
        products: [
          { id: 26, name: 'Fromage Râpé Gruyère', brand: 'Formage Rape Grue', image: '/PRODOUI brc/Restoration/FORMAGE RAPE GRUE.png', description: 'Fromage gruyère râpé, parfait pour gratins et pizzas.' },
          { id: 27, name: 'Gouda', brand: 'Gouda', image: '/PRODOUI brc/Restoration/GOUDA.png', description: 'Fromage Gouda de qualité, goût doux et crémeux.' },
          { id: 28, name: 'Landore Râpé', brand: 'Landore', image: '/PRODOUI brc/Restoration/LANDORE RAPE.png', description: 'Fromage râpé Landore, pratique pour vos préparations.' },
          { id: 29, name: 'Le Fondant Râpé', brand: 'Le Fondant', image: '/PRODOUI brc/Restoration/LE FONDANTE RAPE.png', description: 'Fromage râpé Le Fondant, fonte parfaite.' },
          { id: 30, name: 'Slice Le Fondant', brand: 'Le Fondant', image: '/PRODOUI brc/Restoration/SLICE LE FONDANTE.png', description: 'Fromage en tranches Le Fondant, idéal pour burgers.' },
          { id: 31, name: 'Slice Campo', brand: 'Campo', image: '/PRODOUI brc/Restoration/SLACE CAMPO.png', description: 'Fromage en tranches Campo, parfait pour sandwiches.' },
          { id: 32, name: 'Mon Régal', brand: 'Mon Régal', image: '/PRODOUI brc/Restoration/MON REGAL.png', description: 'Fromage Mon Régal, saveur délicate et raffinée.' },
          { id: 33, name: 'Madame Kamoun', brand: 'Madame Kamoun', image: '/PRODOUI brc/Restoration/MADAME KAMOUN.png', description: 'Fromage Madame Kamoun, qualité artisanale.' },
          { id: 34, name: 'Dorela', brand: 'Dorela', image: '/PRODOUI brc/Restoration/DORELA.png', description: 'Fromage Dorela, goût authentique et crémeux.' },
          { id: 35, name: 'Sahlia', brand: 'Sahlia', image: '/PRODOUI brc/Restoration/SAHLIA.png', description: 'Fromage Sahlia, texture onctueuse et savoureuse.' },
          { id: 36, name: 'Spécial', brand: 'Spésial', image: '/PRODOUI brc/Restoration/SPESIAL.png', description: 'Fromage spécial, mélange unique de saveurs.' },
        ]
      }
    ]
  },
  {
    id: 'patisseries',
    name: 'Pâtisseries',
    image: '/category-bakery.jpg',
    description: 'Équipement complet pour pâtissiers professionnels : moules, ustensiles, robots, et ingrédients de qualité supérieure.',
    hasSubcategories: true,
    subcategories: [
      {
        id: 'jadida',
        name: 'Jadida',
        products: [
          { id: 25, name: 'Farine T55 Jadida', brand: 'Jadida', image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=500&h=500&fit=crop', description: 'Farine de blé tendre T55, idéale pour pâtisseries.' },
          { id: 26, name: 'Levure Chimique Jadida', brand: 'Jadida', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop', description: 'Levure chimique pour faire lever vos gâteaux.' },
          { id: 27, name: 'Sucre en Poudre Jadida', brand: 'Jadida', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=500&fit=crop', description: 'Sucre blanc en poudre fin, parfait pour desserts.' },
        ]
      },
      {
        id: 'gias',
        name: 'Gias',
        products: [
          { id: 28, name: 'Farine T65 Gias', brand: 'Gias', image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=500&h=500&fit=crop', description: 'Farine de blé tendre T65, qualité supérieure.' },
          { id: 29, name: 'Levure de Boulangerie Gias', brand: 'Gias', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop', description: 'Levure de boulangerie fraîche, pour pains et viennoiseries.' },
          { id: 30, name: 'Sucre Cristal Gias', brand: 'Gias', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=500&fit=crop', description: 'Sucre cristal, parfait pour pâtisseries.' },
        ]
      },
      {
        id: 'vanoise',
        name: 'Vanoise',
        products: [
          { id: 31, name: 'Chocolat Noir Vanoise', brand: 'Vanoise', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&h=500&fit=crop', description: 'Chocolat noir de couverture 70% cacao.' },
          { id: 32, name: 'Chocolat au Lait Vanoise', brand: 'Vanoise', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&h=500&fit=crop', description: 'Chocolat au lait, goût crémeux et doux.' },
          { id: 33, name: 'Chocolat Blanc Vanoise', brand: 'Vanoise', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&h=500&fit=crop', description: 'Chocolat blanc, parfait pour décors.' },
        ]
      },
      {
        id: 'dokrem',
        name: 'Dokrem',
        products: [
          { id: 34, name: 'Beurre Doux Dokrem', brand: 'Dokrem', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&h=500&fit=crop', description: 'Beurre doux de qualité supérieure.' },
          { id: 35, name: 'Beurre Salé Dokrem', brand: 'Dokrem', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&h=500&fit=crop', description: 'Beurre salé, parfait pour recettes salées.' },
          { id: 36, name: 'Margarine Dokrem', brand: 'Dokrem', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&h=500&fit=crop', description: 'Margarine végétale, alternative au beurre.' },
        ]
      },
      {
        id: 'said',
        name: 'Said',
        products: [
          { id: 37, name: 'Œufs Frais Said', brand: 'Said', image: 'https://images.unsplash.com/photo-1518569656558-1ea25c5e0d3e?w=500&h=500&fit=crop', description: 'Œufs frais de poules élevées en plein air.' },
          { id: 38, name: 'Œufs Bio Said', brand: 'Said', image: 'https://images.unsplash.com/photo-1518569656558-1ea25c5e0d3e?w=500&h=500&fit=crop', description: 'Œufs bio, qualité premium.' },
          { id: 39, name: 'Œufs Omega 3 Said', brand: 'Said', image: 'https://images.unsplash.com/photo-1518569656558-1ea25c5e0d3e?w=500&h=500&fit=crop', description: 'Œufs enrichis en Omega 3.' },
        ]
      },
      {
        id: 'aromalux',
        name: 'Aromalux',
        products: [
          { id: 40, name: 'Extrait de Vanille Aromalux', brand: 'Aromalux', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Extrait de vanille pur, arôme authentique.' },
          { id: 41, name: 'Extrait d\'Amande Aromalux', brand: 'Aromalux', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Extrait d\'amande, goût délicat.' },
          { id: 42, name: 'Extrait de Citron Aromalux', brand: 'Aromalux', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Extrait de citron, fraîcheur garantie.' },
        ]
      },
      {
        id: 'fructa',
        name: 'Fructa',
        products: [
          { id: 43, name: 'Colorant Alimentaire Fructa', brand: 'Fructa', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Colorants alimentaires naturels, assortiment de couleurs.' },
          { id: 44, name: 'Arôme Fraise Fructa', brand: 'Fructa', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Arôme fraise naturel, goût authentique.' },
          { id: 45, name: 'Arôme Pistache Fructa', brand: 'Fructa', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Arôme pistache, saveur orientale.' },
        ]
      },
      {
        id: 'crystalice',
        name: 'Crystalice',
        products: [
          { id: 46, name: 'Gélatine Crystalice', brand: 'Crystalice', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Gélatine en poudre, pour desserts et entremets.' },
          { id: 47, name: 'Agar-Agar Crystalice', brand: 'Crystalice', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Agar-agar végétal, alternative à la gélatine.' },
          { id: 48, name: 'Pectine Crystalice', brand: 'Crystalice', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Pectine, pour confitures et gelées.' },
        ]
      },
      {
        id: 'lartisto',
        name: 'Lartisto',
        products: [
          { id: 49, name: 'Fondant Lartisto', brand: 'Lartisto', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Fondant pâtissier, pour décorations de gâteaux.' },
          { id: 50, name: 'Pâte à Sucre Lartisto', brand: 'Lartisto', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Pâte à sucre colorée, pour créations artistiques.' },
          { id: 51, name: 'Glaçage Royal Lartisto', brand: 'Lartisto', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Glaçage royal, pour décorations fines.' },
        ]
      },
      {
        id: 'baristella',
        name: 'Baristella',
        products: [
          { id: 52, name: 'Crème Pâtissière Baristella', brand: 'Baristella', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Crème pâtissière instantanée, prête à l\'emploi.' },
          { id: 53, name: 'Crème Chantilly Baristella', brand: 'Baristella', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Crème chantilly en poudre, facile à préparer.' },
          { id: 54, name: 'Mousse au Chocolat Baristella', brand: 'Baristella', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Mousse au chocolat instantanée, délicieuse.' },
        ]
      },
      {
        id: 'saveurs',
        name: 'Saveurs',
        products: [
          { id: 55, name: 'Épices Saveurs', brand: 'Saveurs', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Assortiment d\'épices pour pâtisseries.' },
          { id: 56, name: 'Cannelle Saveurs', brand: 'Saveurs', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Cannelle en poudre, arôme chaud et doux.' },
          { id: 57, name: 'Noix de Muscade Saveurs', brand: 'Saveurs', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Noix de muscade moulue, saveur authentique.' },
        ]
      },
      {
        id: 'shehrazad',
        name: 'Shehrazad',
        products: [
          { id: 58, name: 'Fruits Confits Shehrazad', brand: 'Shehrazad', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Fruits confits variés, pour décorations.' },
          { id: 59, name: 'Amandes Effilées Shehrazad', brand: 'Shehrazad', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Amandes effilées, pour décorations élégantes.' },
          { id: 60, name: 'Noix de Coco Râpée Shehrazad', brand: 'Shehrazad', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Noix de coco râpée, texture fine et goût délicat.' },
        ]
      }
    ]
  },
  {
    id: 'cafe',
    name: 'Café',
    image: '/category-cafe.jpg',
    description: 'Tout l\'équipement nécessaire pour cafés et bars : machines à café, moulins, accessoires pour baristas professionnels.',
    hasSubcategories: true,
    subcategories: [
      {
        id: 'cafe-marques',
        name: 'Café',
        products: [
          { id: 61, name: 'Café Arabica Lavazza', brand: 'Lavazza', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop', description: 'Café arabica 100% pur, arômes intenses et goût équilibré.' },
          { id: 62, name: 'Café Expresso Illy', brand: 'Illy', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&h=500&fit=crop', description: 'Café expresso moulu, mélange parfait pour machines expresso.' },
          { id: 63, name: 'Café Nespresso', brand: 'Nespresso', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop', description: 'Capsules de café Nespresso, intensité 8, arômes corsés.' },
          { id: 64, name: 'Café Tassimo', brand: 'Tassimo', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop', description: 'Disques Tassimo, café fraîchement préparé.' },
        ]
      },
      {
        id: 'aromes',
        name: 'Les Aromes',
        products: [
          { id: 65, name: 'Arôme Vanille', brand: 'Monin', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Arôme vanille naturel, parfait pour cafés et boissons.' },
          { id: 66, name: 'Arôme Caramel', brand: 'Monin', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Arôme caramel, saveur douce et onctueuse.' },
          { id: 67, name: 'Arôme Noisette', brand: 'Monin', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Arôme noisette, goût authentique et délicat.' },
          { id: 68, name: 'Arôme Amande', brand: 'Monin', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Arôme amande, parfum subtil et raffiné.' },
        ]
      },
      {
        id: 'lait-concentre',
        name: 'Lait Concentré',
        products: [
          { id: 69, name: 'Lait Concentré Nestlé', brand: 'Nestlé', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&h=500&fit=crop', description: 'Lait concentré sucré, crémeux et onctueux.' },
          { id: 70, name: 'Lait Concentré Régilait', brand: 'Régilait', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&h=500&fit=crop', description: 'Lait concentré, qualité française traditionnelle.' },
          { id: 71, name: 'Crème de Lait', brand: 'Président', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&h=500&fit=crop', description: 'Crème de lait entière, pour cafés et desserts.' },
        ]
      },
      {
        id: 'topping',
        name: 'Topping',
        products: [
          { id: 72, name: 'Chantilly en Bombes', brand: 'Elle & Vire', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Chantilly en bombes, prête à l\'emploi.' },
          { id: 73, name: 'Chantilly en Aérosol', brand: 'Président', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Chantilly en aérosol, facile d\'utilisation.' },
          { id: 74, name: 'Crème Fouettée', brand: 'Elle & Vire', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Crème fouettée liquide, à fouetter soi-même.' },
        ]
      },
      {
        id: 'sirop',
        name: 'Sirop',
        products: [
          { id: 75, name: 'Sirop de Vanille', brand: 'Monin', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Sirop de vanille, arôme naturel et intense.' },
          { id: 76, name: 'Sirop de Caramel', brand: 'Monin', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Sirop de caramel, goût riche et onctueux.' },
          { id: 77, name: 'Sirop de Noisette', brand: 'Monin', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Sirop de noisette, saveur authentique.' },
          { id: 78, name: 'Sirop d\'Amande', brand: 'Monin', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=500&fit=crop', description: 'Sirop d\'amande, parfum subtil et raffiné.' },
        ]
      },
      {
        id: 'chocolat-chaud',
        name: 'Chocolat Chaud',
        products: [
          { id: 79, name: 'Chocolat Chaud Nestlé', brand: 'Nestlé', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&h=500&fit=crop', description: 'Chocolat en poudre, goût authentique et crémeux.' },
          { id: 80, name: 'Chocolat Chaud Banania', brand: 'Banania', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&h=500&fit=crop', description: 'Chocolat en poudre traditionnel, goût unique.' },
          { id: 81, name: 'Chocolat Chaud Ovomaltine', brand: 'Ovomaltine', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&h=500&fit=crop', description: 'Chocolat malté, énergisant et délicieux.' },
        ]
      },
      {
        id: 'sucre',
        name: 'Sucre',
        products: [
          { id: 82, name: 'Sucre Roux', brand: 'La Perruche', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=500&fit=crop', description: 'Sucre roux de canne, saveur caramélisée.' },
          { id: 83, name: 'Sucre Blanc', brand: 'Saint Louis', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=500&fit=crop', description: 'Sucre blanc raffiné, goût neutre.' },
          { id: 84, name: 'Sucre de Coco', brand: 'Bio', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=500&fit=crop', description: 'Sucre de coco bio, alternative naturelle.' },
        ]
      }
    ]
  },
  {
    id: 'nettoyage',
    name: 'Nettoyage',
    image: '/category-nettoyage.jpg',
    description: 'Produits et équipements de nettoyage professionnels pour maintenir vos locaux impeccables.',
    hasSubcategories: true,
    subcategories: [
      {
        id: 'desodorisant-sol',
        name: 'Désodorisant du Sol',
        image: '/products/Nettoyage/desodorisant-sol-logo.jpg',
        products: [
          { id: 85, name: 'El Basatine 5L', brand: 'Jmal', image: '/products/Nettoyage/desodorisant-El basatine 5L Jmal.png', description: 'Désodorisant sol El Basatine 5L, fraîcheur longue durée pour tous types de sols.' },
          { id: 86, name: 'Fawah 3L', brand: 'Jmal', image: '/products/Nettoyage/desodorisant-fawah 3L Jmal.png', description: 'Désodorisant sol Fawah 3L, parfum agréable et efficacité durable.' },
          { id: 87, name: 'Fawah 5L', brand: 'Jmal', image: '/products/Nettoyage/desodorisant-fawah 5L Jmal.png', description: 'Désodorisant sol Fawah 5L, format économique pour usage professionnel.' },
        ]
      },
      {
        id: 'liquide-linge',
        name: 'Liquide Linge',
        image: '/products/Nettoyage/liquide-linge-logo.jpg',
        products: [
          { id: 88, name: 'Finesse 1L', brand: 'Jmal', image: '/products/Nettoyage/liquide-linge-finesse 1L Jmal.png', description: 'Lessive liquide Finesse 1L, nettoyage en profondeur et fraîcheur intense.' },
          { id: 89, name: 'Finesse 3L', brand: 'Jmal', image: '/products/Nettoyage/liquide-linge-finesse 3L Jmal.png', description: 'Lessive liquide Finesse 3L, élimine les taches tenaces efficacement.' },
          { id: 90, name: 'Finesse 5L', brand: 'Jmal', image: '/products/Nettoyage/liquide-linge-finnesse 5L Jmal.png', description: 'Lessive liquide Finesse 5L, format économique pour professionnels.' },
          { id: 128, name: 'Ghassel 3L', brand: 'Jmal', image: '/products/Nettoyage/liquide-linge-ghassel 3L Jmal.png', description: 'Lessive liquide Ghassel 3L, performance optimale et parfum durable.' },
        ]
      },
      {
        id: 'liquide-vaisselle',
        name: 'Liquide Vaisselle',
        image: '/products/Nettoyage/liquide-vaisselle-logo.jpg',
        products: [
          { id: 91, name: 'Alys Pomme 1L', brand: 'Jmal', image: '/products/Nettoyage/liquide-vaisselle-alys 1L pomme Jmal.png', description: 'Liquide vaisselle Alys parfum pomme 1L, dégraisse efficacement.' },
          { id: 92, name: 'Alys Pomme 2L', brand: 'Jmal', image: '/products/Nettoyage/liquide-vaisselle-Alys-Pomme_2L_Jmal_.png', description: 'Liquide vaisselle Alys parfum pomme 2L, mousse abondante et durable.' },
          { id: 93, name: 'Alys Citron 1L', brand: 'Jmal', image: '/products/Nettoyage/liquide-vaisselle-alys citron 1L Jmal.png', description: 'Liquide vaisselle Alys parfum citron 1L, fraîcheur et efficacité.' },
          { id: 129, name: 'Alys Citron 3L', brand: 'Jmal', image: '/products/Nettoyage/liquide-vaisselle-alys 3L citron Jmal.png', description: 'Liquide vaisselle Alys parfum citron 3L, dégraissant puissant.' },
          { id: 130, name: 'Alyse Citron 5L', brand: 'Jmal', image: '/products/Nettoyage/liquide-vaisselle-alyse 5L citron Jmal.png', description: 'Liquide vaisselle Alyse parfum citron 5L, format professionnel économique.' },
          { id: 131, name: 'Alyse Pomme 5L', brand: 'Jmal', image: '/products/Nettoyage/liquide-vaisselle-alyse pomme 5L Jmal.png', description: 'Liquide vaisselle Alyse parfum pomme 5L, efficacité maximale pour usage intensif.' },
        ]
      },
      
    ]
  },
  {
    id: 'cereales',
    name: 'Céréales',
    image: '/category-Céreales.jpg',
    description: 'Large sélection de céréales, épices et produits alimentaires de base pour vos besoins professionnels.',
    hasSubcategories: false,
    products: [
      { id: 97, name: 'اكليل', image: '/products/Céréales/اكليل.jpg', description: 'Feuilles de laurier séchées, arôme puissant pour vos plats mijotés.' },
      { id: 98, name: 'تابل', image: '/products/Céréales/تابل.jpg', description: 'Mélange d\'épices traditionnel, saveurs authentiques pour vos recettes.' },
      { id: 99, name: 'ثوم', image: '/products/Céréales/ثوم.jpg', description: 'Ail déshydraté en poudre, pratique et savoureux pour assaisonnement.' },
      { id: 100, name: 'جلجلان', image: '/products/Céréales/جلجلان.jpg', description: 'Graines de sésame dorées, idéales pour pain, pâtisserie et tahini.' },
      { id: 101, name: 'حمص', image: '/products/Céréales/حمص.jpg', description: 'Pois chiches secs, source de protéines, parfaits pour houmous et salades.' },
      { id: 102, name: 'ذرة', image: '/products/Céréales/ذرة.jpg', description: 'Grains de maïs séchés, polyvalents pour soupes et accompagnements.' },
      { id: 103, name: 'زبيب اسود', image: '/products/Céréales/زبيب اسود.jpg', description: 'Raisins secs noirs, naturellement sucrés, riches en antioxydants.' },
      { id: 104, name: 'زبيب اصفر', image: '/products/Céréales/زبيب اصفر.jpg', description: 'Raisins secs dorés, moelleux et sucrés, parfaits pour pâtisserie.' },
      { id: 105, name: 'زعتر', image: '/products/Céréales/زعتر.jpg', description: 'Thym séché de qualité, arôme méditerranéen pour vos plats.' },
      { id: 106, name: 'سينوج', image: '/products/Céréales/سينوج.jpg', description: 'Graines de fenugrec, saveur unique pour cuisine orientale.' },
      { id: 107, name: 'شوفان', image: '/products/Céréales/شوفان.jpg', description: 'Flocons d\'avoine naturels, riches en fibres, pour petit-déjeuner sain.' },
      { id: 108, name: 'طرنجية', image: '/products/Céréales/طرنجية.jpg', description: 'Mélisse séchée, parfum citronné, idéale pour infusions et tisanes.' },
      { id: 109, name: 'عدس احمر', image: '/products/Céréales/عدس احمر.jpg', description: 'Lentilles rouges corail, cuisson rapide, parfaites pour soupes et purées.' },
      { id: 110, name: 'عدس', image: '/products/Céréales/عدس.jpg', description: 'Lentilles vertes, texture ferme, idéales pour salades et plats mijotés.' },
      { id: 111, name: 'فلفل اسود', image: '/products/Céréales/فلفل اسود.jpg', description: 'Poivre noir en grains, arôme intense, indispensable en cuisine.' },
      { id: 112, name: 'فلفل شايح', image: '/products/Céréales/فلفل شايح.jpg', description: 'Piment fort séché, pour relever vos plats avec intensité.' },
      { id: 113, name: 'قرفة', image: '/products/Céréales/قرفة.jpg', description: 'Bâtons de cannelle, arôme délicat pour desserts et boissons chaudes.' },
      { id: 114, name: 'قلوب القرع', image: '/products/Céréales/قلوب القرع.jpg', description: 'Graines de courge décortiquées, riches en nutriments, parfaites en snack.' },
      { id: 115, name: 'كاكاو', image: '/products/Céréales/كاكاو.jpg', description: 'Poudre de cacao pur, intense et naturel, pour chocolat chaud et desserts.' },
      { id: 116, name: 'كركم', image: '/products/Céréales/كركم.jpg', description: 'Curcuma en poudre, couleur dorée, propriétés anti-inflammatoires.' },
      { id: 117, name: 'كروية', image: '/products/Céréales/كروية.jpg', description: 'Graines de carvi aromatiques, saveur distinctive pour pain et plats.' },
      { id: 118, name: 'لوبيا', image: '/products/Céréales/لوبيا.jpg', description: 'Haricots blancs secs, source de protéines végétales, parfaits pour ragoûts.' },
      { id: 119, name: 'ينسون نجمي', image: '/products/Céréales/ينسون نجمي.jpg', description: 'Anis étoilé, parfum anisé puissant, idéal pour infusions et plats asiatiques.' },
    ]
  },
  {
    id: 'emballage',
    name: 'Emballage',
    image: '/category-packaging.jpg',
    description: 'Large gamme d\'emballages alimentaires professionnels : contenants, sacs, boîtes pour tous vos besoins de conditionnement.',
    hasSubcategories: false,
    products: [
      { id: 120, name: 'Sacs Papier Kraft', brand: 'EcoPack', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop', description: 'Sacs en papier kraft recyclable, résistants, parfaits pour vente à emporter.' },
      { id: 121, name: 'Barquettes Aluminium', brand: 'AluPack', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop', description: 'Barquettes en aluminium, étanches, idéales pour plats chauds et froids.' },
      { id: 122, name: 'Film Plastique Alimentaire', brand: 'Saran', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop', description: 'Film plastique alimentaire, protection optimale des aliments.' },
      { id: 123, name: 'Boîtes Carton', brand: 'CardBoard Pro', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop', description: 'Boîtes en carton recyclé, différentes tailles, parfaites pour stockage.' },
      { id: 124, name: 'Étiquettes Adhésives', brand: 'LabelPro', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop', description: 'Étiquettes adhésives blanches, résistantes à l\'eau, pour identification produits.' },
      { id: 125, name: 'Ruban Adhésif', brand: 'Scotch', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop', description: 'Ruban adhésif transparent, forte adhérence, parfait pour fermeture emballages.' },
      { id: 126, name: 'Sacs Plastique Alimentaires', brand: 'EcoPack', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop', description: 'Sacs plastique alimentaires, différentes tailles.' },
      { id: 127, name: 'Papier Aluminium', brand: 'AluPack', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop', description: 'Papier aluminium, protection et conservation des aliments.' },
    ]
  }
];

export const features = [
  { 
    icon: "M5 13l4 4L19 7", 
    title: "Qualité Premium", 
    desc: "Produits alimentaires de qualité supérieure pour professionnels" 
  },
  { 
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", 
    title: "Livraison Express", 
    desc: "Livraison rapide dans toute la Tunisie pour vos urgences" 
  },
  { 
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", 
    title: "Conseil Expert", 
    desc: "Équipe spécialisée pour vous conseiller dans vos choix" 
  }
];

// Helper functions
export const getCategoryById = (id) => {
  return categories.find(cat => cat.id === id);
};

export const getSubcategoryById = (categoryId, subcategoryId) => {
  const category = getCategoryById(categoryId);
  if (!category || !category.hasSubcategories) return null;
  return category.subcategories.find(sub => sub.id === subcategoryId);
};

export const getProductById = (productId) => {
  for (const category of categories) {
    if (category.hasSubcategories) {
      for (const subcategory of category.subcategories) {
        const product = subcategory.products.find(p => p.id === parseInt(productId));
        if (product) {
          return { 
            ...product, 
            categoryId: category.id, 
            categoryName: category.name,
            subcategoryId: subcategory.id,
            subcategoryName: subcategory.name
          };
        }
      }
    } else {
      const product = category.products.find(p => p.id === parseInt(productId));
      if (product) {
        return { 
          ...product, 
          categoryId: category.id, 
          categoryName: category.name
        };
      }
    }
  }
  return null;
};

export const getAllProducts = () => {
  const allProducts = [];
  categories.forEach(category => {
    if (category.hasSubcategories) {
      category.subcategories.forEach(subcategory => {
        subcategory.products.forEach(product => {
          allProducts.push({
            ...product,
            categoryId: category.id,
            categoryName: category.name,
            subcategoryId: subcategory.id,
            subcategoryName: subcategory.name
          });
        });
      });
    } else {
      category.products.forEach(product => {
        allProducts.push({
          ...product,
          categoryId: category.id,
          categoryName: category.name
        });
      });
    }
  });
  return allProducts;
};

export const getProductsByCategory = (categoryId) => {
  const category = getCategoryById(categoryId);
  if (!category) return [];
  
  if (category.hasSubcategories) {
    // For categories with subcategories, return all products from all subcategories
    const allProducts = [];
    category.subcategories.forEach(subcategory => {
      subcategory.products.forEach(product => {
        allProducts.push({
          ...product,
          subcategoryId: subcategory.id,
          subcategoryName: subcategory.name
        });
      });
    });
    return allProducts;
  } else {
    // For flat categories, return products directly
    return category.products;
  }
};

export const getProductsBySubcategory = (categoryId, subcategoryId) => {
  const subcategory = getSubcategoryById(categoryId, subcategoryId);
  return subcategory ? subcategory.products : [];
};
