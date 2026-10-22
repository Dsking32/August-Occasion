// Real event photos for the home page gallery. Files live in public/images/gallery/.
// Order = order shown (drinks first). fit: "contain" shows the whole photo over a soft blurred backdrop (use it for
// wide photos so people and glasses are never cropped). pos: optional object-position for cropped (cover) photos.
const g = (name, alt, fit = "cover", pos) => ({ name: `gallery/${name}`, src: `/images/gallery/${name}.webp`, alt, fit, pos });

export const galleryPhotos = [
  g("strawberry-carafes", "Two carafes of frozen strawberry cocktail topped with cream and a fresh strawberry"),
  g("frozen-cocktail-trio", "Three frozen cocktails in branded glasses, garnished with strawberries and redcurrants", "contain"),
  g("mango-cucumber-frozen", "Three frozen mango cocktails in hurricane glasses with carved cucumber garnish", "contain"),
  g("kiwi-cocktails", "Three orange cocktails in gold-stemmed glasses with kiwi slices", "contain"),
  g("monogram-cocktails", "Three strawberry cocktails with custom monogram labels on the glasses", "contain"),
  g("rosemary-slush-shots", "Six minty frozen cocktails with rosemary sprigs and blueberries, labelled for a wedding", "contain"),
  g("lit-champagne-bar", "A lit bar with champagne and wine on illuminated shelves", "contain"),
  g("gold-leaf-bar", "A gold leaf-cut bar glowing under green event lighting with a drinks menu on top"),
  g("gold-mandala-bar", "A gold and black mandala-pattern bar with syrups, rum and glassware", "contain"),
  g("pouring-drink", "A bartender in an August Occasions jacket pouring a drink into a crystal glass beside white flowers"),
  g("tray-service", "A waiter in an August Occasions bow tie serving red and golden drinks on a tray"),
  g("bar-team", "The August Occasions bar team standing around a lit bar", "contain"),
  g("team-prepping", "August Occasions bartenders in purple chef jackets stocking baskets with drinks", "contain"),
  g("geometric-bar", "A white geometric bar with the August Occasions logo, syrups and a drink dispenser"),
  g("bartender-at-bar", "A smiling bartender at an August Occasions bar next to a framed couple portrait", "contain"),
  g("chefs-cooler", "Two bartenders loading chilled soft drinks from a cooler"),
  g("champagne-on-ice", "Mini champagne, rosé and wine bottles chilling on ice"),
  g("fresh-juice-bucket", "A bucket of fresh juice bottles with August Occasions labels", "contain"),
  g("cooler-baskets", "Drinks in baskets and a cooler packed with ice for event service"),
  g("iced-soft-drinks", "A tub of soft drinks and juices chilling on ice"),
];
