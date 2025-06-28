// База данных товаров
function getProductImage(id) {
  // Простая проверка - возвращаем путь к изображению
  // Если изображение не существует, браузер автоматически покажет placeholder
  // благодаря onerror обработчику в HTML
  return `img/products/${id}.jpg`;
}

// База данных товаров
const products = [
  { id: 1, name: 'vitamin C', price: 430, image: getProductImage(1), category: 'Пищевая добавка', description: 'Atomy Vitamin C – это высококачественная пищевая добавка, созданная для поддержки иммунной системы, повышения жизненного тонуса и защиты организма от негативного воздействия окружающей среды. Каждая порция содержит 500 мг чистого витамина C, дополненного натуральными ингредиентами, такими как экстракт манго и граната, обеспечивая не только пользу, но и приятный вкус.' },
  { id: 2, name: 'spirulina', price: 560, image: getProductImage(2), category: 'Пищевая добавка', description: 'Atomy Spirulina — это пищевая добавка на основе 100% чистой спирулины, сине-зелёной микроводоросли, выращенной в экологически чистых условиях. Она считается одним из самых питательных природных источников, богатым белками, витаминами, минералами и антиоксидантами.' },
  { id: 3, name: 'lutein', price: 710, image: getProductImage(3), category: 'Пищевая добавка', description: 'Atomy Ай Лютеин — это биологически активная добавка, разработанная для поддержки и защиты зрения. В её составе — мощная комбинация натурального лютеина, витамина А, цинка и экстрактов ягод (черника, бузина, рябина и др.). Эти компоненты работают синергетически, улучшая зрение и защищая глаза от воздействия внешних факторов, включая синий свет от экранов.' },
  { id: 4, name: 'tea puer', price: 760, image: getProductImage(4), category: 'Пищевая добавка', description: 'Атоми Чай Пуэр для похудения — это пищевая добавка в удобных саше (по 1 г), созданная на основе экстракта ферментированного китайского чая пуэр. Продукт разработан для поддержки обмена веществ, улучшения пищеварения и мягкого очищения организма.' },
  { id: 5, name: 'пробиотик', price: 565, image: getProductImage(5), category: 'Пищевая добавка', description: 'Atomy Пробиотик 10 — это высокоэффективная пищевая добавка, содержащая 10 штаммов полезных бактерий и 3 миллиарда КОЕ (колониеобразующих единиц) в одной порции. Разработан для поддержания и восстановления здоровой микрофлоры кишечника, укрепления иммунитета и улучшения пищеварения.' },
  { id: 6, name: 'omega 3', price: 1120, image: getProductImage(6), category: 'Пищевая добавка', description: 'Atomy Vegetable Omega‑3 — это пищевая добавка, содержащая растительную форму Омега‑3 жирных кислот (EPA и DHA), полученных из микроводорослей (Schizochytrium sp.). В отличие от обычной рыбий жир-омеги, этот продукт идеально подходит веганам и вегетарианцам, а также людям с аллергией на рыбу или морепродукты.' },
  { id: 7, name: 'rhodiola', price: 650, image: getProductImage(7), category: 'Пищевая добавка', description: 'Atomy Rhodiola Milk Thistle — это пищевая добавка, разработанная для поддержки печени, устойчивости к стрессу и повышения энергии. В состав входят два мощных природных компонента: Родиола розовая (Rhodiola Rosea) и Расторопша пятнистая (Milk Thistle).' },
  { id: 8, name: 'psyllium', price: 650, image: getProductImage(8), category: 'Пищевая добавка', description: 'Atomy Psyllium Husk — это пищевая добавка в форме индивидуальных саше, содержащая натуральные пищевые волокна из шелухи семян подорожника (Plantago ovata), известного как псиллиум. Дополнительно обогащён порошком клюквы и ягод, что придаёт ему приятный вкус и усиливает антиоксидантные свойства.' },
  { id: 9, name: 'vitamin b', price: 610, image: getProductImage(9), category: 'Пищевая добавка', description: 'Atomy Vitamin B Complex — это пищевая добавка, содержащая все 8 витаминов группы B, включая B1 (тиамин), B2 (рибофлавин), B3 (ниацин), B5 (пантотеновая кислота), B6, B7 (биотин), B9 (фолиевая кислота) и B12. Эти витамины работают синергично, поддерживая энергетический обмен, нервную систему, здоровье кожи, волос, ногтей и психоэмоциональное состояние.' },
  { id: 10, name: 'coffe arabica black', price: 360, image: getProductImage(10), category: 'Без категории', description: 'Atomy Cafe Arabica Black — это премиальный растворимый чёрный кофе, изготовленный из 100% высококачественных зёрен арабики. Он не содержит сахара, сливок или добавок, что делает его идеальным выбором для любителей чистого, насыщенного кофейного вкуса.' },
  { id: 11, name: 'coffe arabica brown', price: 205, image: getProductImage(11), category: 'Без категории', description: 'Atomy Cafe Arabica — это высококачественный растворимый кофе, изготовленный из 100 % арабики. Продукт выпускается в удобной упаковке из 50 индивидуальных стик-пакетов, что обеспечивает комфортное и дозированное употребление.' },
  { id: 12, name: 'средство для ванной', price: 200, image: getProductImage(12), category: 'Бытовая химия', description: 'Atomy Универсальное средство для ванной — это многофункциональный чистящий спрей, предназначенный для эффективного удаления мыльного налёта, известковых отложений, грязи и неприятных запахов с поверхностей в ванной комнате. Его можно использовать на раковинах, кафеле, ванных, унитазах и смесителях.' },
  { id: 13, name: 'средство для кухни', price: 200, image: getProductImage(13), category: 'Бытовая химия', description: 'Atomy Multi-Purpose Detergent for Kitchen — это многофункциональное чистящее средство, специально разработанное для удаления жировых и пищевых загрязнений на кухне. Идеально подходит для поверхностей из нержавеющей стали, стекла, плитки, керамики и пластика.' },
  { id: 14, name: 'порошок', price: 235, image: getProductImage(14), category: 'Бытовая химия', description: 'Atomy Laundry Sheets — это инновационное средство для стирки в формате ультратонких листов, которое заменяет традиционный стиральный порошок, гель или капсулы. Каждый лист содержит концентрированную формулу, обеспечивающую глубокую очистку даже в холодной воде. Идеально подходит для всех типов тканей и стиральных машин.' },
  { id: 15, name: 'средство для посуды', price: 155, image: getProductImage(15), category: 'Бытовая химия', description: 'Это мягкое, но мощное жидкое средство для мытья посуды, предназначенное для эффективного удаления жира, остатков пищи и других загрязнений. Благодаря своему мягкому составу подходит даже для мытья овощей, фруктов и детской посуды.' },
  { id: 16, name: 'таблетки для посудомойки', price: 325, image: getProductImage(16), category: 'Бытовая химия', description: 'Atomy таблетки для посудомоечной машины "Всё в одном" — это многофункциональное и экологичное решение для чистки посуды. Таблетки разработаны по технологии 3-в-1, сочетая в себе моющее средство, ополаскиватель и компонент для блеска. Они эффективно удаляют даже стойкие загрязнения и безопасны как для посуды, так и для здоровья.' },
  { id: 17, name: 'подводка черная', price: 200, image: getProductImage(17), category: 'Макияж', description: 'Чёрная подводка от Atomy — это водостойкий лайнер с фетровым наконечником, который позволяет легко и точно рисовать как тонкие, так и выразительные стрелки. Благодаря насыщенному пигменту и стойкой формуле, она остаётся на веках в течение всего дня без размазывания и осыпания.' },
  { id: 18, name: 'тени номер 1', price: 510, image: getProductImage(18), category: 'Макияж', description: 'Тени для век Adelica Far Paleti No.1 Daily Brown от Atomy — это стильная и универсальная палетка из четырёх оттенков в тёпло-коричневой гамме. Она разработана специально для создания мягкого, естественного дневного макияжа, но при желании с её помощью можно легко сделать и более выразительный вечерний образ.' },
  { id: 19, name: 'тени номер 2', price: 510, image: getProductImage(19), category: 'Макияж', description: 'Atomy — это тщательно подобранная коллекция из четырёх тёплых коричневых оттенков, разработанных для создания как повседневного, так и более выразительного вечернего макияжа. Тени обладают шелковистой текстурой, хорошо наслаиваются и растушёвываются, придавая взгляду глубину и лёгкое сияние. Подходят как новичкам, так и профессионалам.' },
  { id: 20, name: 'тени. номер 3', price: 510, image: getProductImage(20), category: 'Макияж', description: 'Atomy — это тщательно подобранная коллекция из четырёх тёплых коричневых оттенков, разработанных для создания как повседневного, так и более выразительного вечернего макияжа. Тени обладают шелковистой текстурой, хорошо наслаиваются и растушёвываются, придавая взгляду глубину и лёгкое сияние. Подходят как новичкам, так и профессионалам.' },
  { id: 21, name: 'тени номер 4', price: 510, image: getProductImage(21), category: 'Макияж', description: 'Atomy — это тщательно подобранная коллекция из четырёх тёплых коричневых оттенков, разработанных для создания как повседневного, так и более выразительного вечернего макияжа. Тени обладают шелковистой текстурой, хорошо наслаиваются и растушёвываются, придавая взгляду глубину и лёгкое сияние. Подходят как новичкам, так и профессионалам.' },
  { id: 22, name: 'beslim adelica бронзер', price: 420, image: getProductImage(22), category: 'Макияж', description: 'Bronzer — это изысканный бронзер от Atomy, созданный для того, чтобы подчеркнуть естественные черты лица и придать коже эффект мягкого загара. Формула сочетает три оттенка, которые можно использовать по отдельности или смешивать для плавного, живого контуринга.' },
  { id: 23, name: 'Adelica Sheer Cotton Allık', price: 420, image: getProductImage(23), category: 'Макияж', description: 'Bronzer — это изысканный бронзер от Atomy, созданный для того, чтобы подчеркнуть естественные черты лица и придать коже эффект мягкого загара. Формула сочетает три оттенка, которые можно использовать по отдельности или смешивать для плавного, живого контуринга.' },
  { id: 24, name: 'помада красная', price: 220, image: getProductImage(24), category: 'Макияж', description: 'это больше, чем просто помада. Это роскошный акцент в макияже, который подчёркивает индивидуальность и придаёт губам выразительность с первого прикосновения. Её мягкая, кремовая текстура тает на губах, окутывая их насыщенным цветом и деликатным блеском.' },
  { id: 25, name: 'помада корал', price: 220, image: getProductImage(25), category: 'Макияж', description: 'это больше, чем просто помада. Это роскошный акцент в макияже, который подчёркивает индивидуальность и придаёт губам выразительность с первого прикосновения. Её мягкая, кремовая текстура тает на губах, окутывая их насыщенным цветом и деликатным блеском.' },
  { id: 26, name: 'туш обемная черная', price: 260, image: getProductImage(26), category: 'Макияж', description: 'Adelica Volume Mascara — это классическая объёмная тушь от Atomy, созданная для тех, кто ценит выразительный взгляд без утяжеления. Тушь равномерно покрывает каждую ресничку, придавая густоту, длину и мягкое подкручивание.' },
  { id: 27, name: 'туш водостойкая черная', price: 260, image: getProductImage(27), category: 'Макияж', description: 'Adelica Waterproof Mascara — водостойкая тушь от Atomy, созданная для стойкого макияжа без компромиссов. Идеальна для активных дней, дождливой погоды, занятий спортом или эмоций — тушь остаётся на месте, не осыпается и не размазывается.' },
  { id: 28, name: 'консилер номер 21', price: 220, image: getProductImage(28), category: 'Макияж', description: 'Adelica Concealer от Atomy — это лёгкий, но эффективный консилер, созданный для маскировки несовершенств кожи: тёмных кругов, покраснений, прыщиков и пигментации. Благодаря тонкой текстуре и насыщенному пигменту, он сливается с кожей и обеспечивает естественный, ухоженный вид без эффекта маски.' },
  { id: 29, name: 'консилер номер 23', price: 220, image: getProductImage(29), category: 'Макияж', description: 'Adelica Concealer от Atomy — это лёгкий, но эффективный консилер, созданный для маскировки несовершенств кожи: тёмных кругов, покраснений, прыщиков и пигментации. Благодаря тонкой текстуре и насыщенному пигменту, он сливается с кожей и обеспечивает естественный, ухоженный вид без эффекта маски.' },
  { id: 30, name: 'крем для рук', price: 300, image: getProductImage(30), category: 'Уход за кожей', description: 'Крем для рук Atomy El Kremi — это увлажняющее и ухаживающее средство для ежедневного ухода за кожей рук и кутикулой. Его формула создана на основе натуральных компонентов, витамина E и экстрактов, которые глубоко питают, защищают и восстанавливают кожу.' },
  { id: 31, name: 'крем для ног', price: 290, image: getProductImage(31), category: 'Уход за кожей', description: 'Крем для ног Atomy — это идеальное средство для ухода за сухой и уставшей кожей стоп. Благодаря активным растительным компонентам он глубоко увлажняет, смягчает огрубевшую кожу и способствует заживлению трещин.' },
  { id: 32, name: 'скраб для ног', price: 270, image: getProductImage(32), category: 'Уход за кожей', description: 'это мягкий, но эффективный скраб-гель для ухода за кожей стоп. Он глубоко очищает, отшелушивает ороговевшие клетки, освежает и подготавливает кожу к последующему уходу.' },
  { id: 33, name: 'патчи', price: 390, image: getProductImage(33), category: 'Уход за кожей', description: 'это гидрогелевые патчи для ухода за нежной кожей вокруг глаз. Обогащённые морскими компонентами и растительными экстрактами, они обеспечивают мгновенное увлажнение, осветление и подтяжку кожи.' },
  { id: 34, name: 'тканевые маски', price: 300, image: getProductImage(34), category: 'Уход за кожей', description: 'Atomy Daily Expert Mask — это тканевые маски для интенсивного ухода за кожей лица. Они выпускаются в трёх вариантах: Увлажняющая, Осветляющая, Укрепляющая.' },
  { id: 35, name: 'шампунь и кондиционер', price: 610, image: getProductImage(35), category: 'Уход за волосами', description: 'Atomy Scalpcare Set — это профессиональный набор для ухода за кожей головы и волосами. В комплект входят два средства: Шампунь для кожи головы (500 мл) и Кондиционер (тритмент) для волос (500 мл).' },
  { id: 36, name: 'шампунь', price: 310, image: getProductImage(36), category: 'Уход за волосами', description: 'Atomy Scalpcare Shampoo — это шампунь, созданный для тех, кто заботится не только о волосах, но и о здоровье кожи головы. Он бережно очищает, помогает справиться с жирностью или сухостью, и подготавливает кожу головы к росту сильных и здоровых волос.' },
  { id: 37, name: 'кондицонер для волос', price: 310, image: getProductImage(37), category: 'Уход за волосами', description: 'Atomy Scalpcare Treatment — это кондиционер, созданный специально для ухода за кожей головы и повреждёнными волосами. Его уникальная формула на основе растительных экстрактов помогает не только восстановить волосы по всей длине, но и улучшить общее состояние кожи головы.' },
  { id: 38, name: 'детский шампунь', price: 280, image: getProductImage(38), category: 'Уход за волосами', description: 'Мягкий шампунь‑гель, специально разработанный для детей. Подходит для купания и мытья волос, не раздражает кожу и глаза.' },
  { id: 39, name: 'масло для волос', price: 300, image: getProductImage(39), category: 'Уход за волосами', description: 'Hair Oil Complex — это комплексное масло для волос, обогащённое смесью из шести натуральных масел: арганового, жожоба, авокадо, камелии, макадамии и масла из семян meadowfoam. Оно подходит для ухода за сухими, повреждёнными или тусклыми волосами.' },
  { id: 40, name: 'lotion для тела', price: 170, image: getProductImage(40), category: 'Уход за кожей', description: 'Body Lotion — это увлажняющий лосьон для тела, созданный на основе натуральных компонентов для ежедневного ухода за кожей. Он имеет лёгкую, быстро впитывающуюся текстуру и нежный аромат.' },
  { id: 41, name: 'крем для тела', price: 265, image: getProductImage(41), category: 'Уход за кожей', description: 'Atomy Rich Body Cream — это питательный крем для тела с насыщенной текстурой, созданный для интенсивного ухода за сухой и обезвоженной кожей. Благодаря высокому содержанию увлажняющих и смягчающих компонентов, он глубоко питает кожу, делает её более гладкой и эластичной.' },
  { id: 42, name: 'детские зубные пасты', price: 140, image: getProductImage(42), category: 'Гигиена', description: 'Детская зубная паста Atomy разработана специально для малышей, с учётом особенностей их полости рта. Формула бережно очищает молочные зубы, удаляя налёт и предотвращая появление кариеса.' },
  { id: 43, name: 'пасты', price: 400, image: getProductImage(43), category: 'Гигиена', description: 'Зубная паста Atomy — это высокоэффективное средство для ежедневной гигиены полости рта, подходящее для всей семьи. Содержит натуральный прополис и зелёный чай, которые обладают мощными антибактериальными свойствами.' },
  { id: 44, name: 'зубные детские щетки', price: 240, image: getProductImage(44), category: 'Гигиена', description: 'Зубные щётки Atomy — это высококачественные щётки с ультратонкой щетиной, созданные для бережной и глубокой чистки зубов и дёсен. Щетинки толщиной всего 0,03 мм проникают в труднодоступные участки между зубами и вдоль линии дёсен, эффективно удаляя налёт и остатки пищи.' },
  { id: 45, name: 'зубные щетки', price: 280, image: getProductImage(45), category: 'Гигиена', description: 'Зубные щётки Atomy — это высококачественные щётки с ультратонкой щетиной, созданные для бережной и глубокой чистки зубов и дёсен. Щетинки толщиной всего 0,03 мм проникают в труднодоступные участки между зубами и вдоль линии дёсен, эффективно удаляя налёт и остатки пищи.' },
  { id: 46, name: 'гедрогеливые маски', price: 750, image: getProductImage(46), category: 'Уход за кожей', description: 'Гидрогелевая маска Atomy Brightening & Firming — это инновационный уход, направленный на восстановление сияния и упругости кожи. Формула маски обогащена морскими ингредиентами, включая морской коллаген, экстракт жемчуга и ниацинамид.' },
  { id: 47, name: 'гель для душа', price: 315, image: getProductImage(47), category: 'Уход за кожей', description: 'Гель для душа Atomy Rich Body — это бережное и освежающее средство для ухода за кожей тела. Его насыщенная, но мягкая формула образует воздушную пену, которая эффективно очищает кожу, не нарушая её естественный баланс.' },
  { id: 48, name: 'evening care set', price: 1100, image: getProductImage(48), category: 'Уход за кожей', description: 'Evening Care Set – Очищающий набор для вечернего ухода за кожей. Набор Evening Care Set от Atomy — это 4-ступенчатая система вечернего очищения, созданная для глубокой очистки, обновления и восстановления кожи лица.' },
  { id: 49, name: 'evening care foam cleanser', price: 235, image: getProductImage(49), category: 'Уход за кожей', description: 'Atomy Evening Care Foam Cleanser — это мягкая, но эффективная пенка для умывания, предназначенная для ежедневного очищения кожи. Она бережно удаляет остатки макияжа, излишки кожного жира и загрязнения, не нарушая естественный баланс кожи.' },
  { id: 50, name: 'Deep Cleanser evening care', price: 235, image: getProductImage(50), category: 'Уход за кожей', description: 'Atomy Deep Cleanser — это первый шаг в системе очищения кожи Evening Care. Он мягко и эффективно удаляет макияж, излишки кожного жира, загрязнения и токсины, скопившиеся в течение дня.' },
  { id: 51, name: 'Peeling Gel evening care', price: 250, image: getProductImage(51), category: 'Уход за кожей', description: 'Atomy Peeling Gel — это деликатное средство для глубокого очищения кожи, которое мягко удаляет ороговевшие клетки, выравнивает текстуру и улучшает тон лица.' },
  { id: 52, name: 'Peel‑Off Mask Evening care', price: 250, image: getProductImage(52), category: 'Уход за кожей', description: 'Atomy Peel‑Off Mask — это завершающий этап ухода в системе Evening Care. Маска-плёнка помогает глубоко очистить поры, удалить загрязнения и токсины, а также улучшает микроциркуляцию кожи.' },
  { id: 53, name: 'The Fame', price: 2620, image: getProductImage(53), category: 'Уход за кожей', description: 'Atomy The Fame — это обновлённый набор из 5 средств для комплексного ежедневного ухода за кожей. В его составе — только безопасные, гипоаллергенные компоненты, направленные на укрепление защитного барьера кожи, увлажнение, питание и сохранение молодости.' },
  { id: 54, name: 'the fame крем вокруг. глаз', price: 550, image: getProductImage(54), category: 'Уход за кожей', description: 'Atomy The Fame Eye Cream — это антивозрастной крем для ухода за кожей вокруг глаз, разработанный с применением инновационных технологий и натуральных компонентов. Крем обладает лёгкой текстурой, быстро впитывается, не оставляет липкости и обеспечивает интенсивное питание и увлажнение.' },
  { id: 55, name: 'the fame крем для лица', price: 550, image: getProductImage(55), category: 'Уход за кожей', description: 'Atomy The Fame Nutrition Cream — это питательный крем с богатой, но не жирной текстурой, созданный для восстановления, увлажнения и защиты кожи. Он глубоко питает и помогает восстановить естественный барьер кожи, предотвращая потерю влаги и сухость.' },
  { id: 56, name: 'the fame tonic', price: 430, image: getProductImage(56), category: 'Уход за кожей', description: 'Atomy The Fame Toner — это базовый шаг в уходе за кожей, направленный на восстановление баланса влаги и подготовку кожи к следующему этапу. Лёгкая формула быстро впитывается, освежает кожу и помогает смягчить ощущение стянутости после очищения.' },
  { id: 57, name: 'the fame serum', price: 580, image: getProductImage(57), category: 'Уход за кожей', description: 'Atomy The Fame Serum — это концентрированная антивозрастная сыворотка, предназначенная для глубокого восстановления и питания кожи. Благодаря лёгкой текстуре она быстро впитывается, не оставляя липкости, и глубоко воздействует на кожу, стимулируя обновление клеток и укрепляя структуру кожи.' },
  { id: 58, name: 'the fame lotion', price: 580, image: getProductImage(58), category: 'Уход за кожей', description: 'Atomy The Fame Lotion — это лёгкий, но эффективный лосьон, который завершает этап увлажнения кожи в ежедневном уходе. Благодаря сбалансированной формуле он быстро впитывается, не оставляя липкости или жирного блеска.' },
  { id: 59, name: 'absolute набор', price: 4990, image: getProductImage(59), category: 'Уход за кожей', description: 'Atomy Absolut CellActive — это премиальный антивозрастной набор, включающий крем и сыворотку (точный состав в одноимённом продукте). Настроен на глубокое восстановление кожи, улучшение её структуры и активное питательное действие.' },
  { id: 60, name: 'Absolute CellActive Tonic', price: 935, image: getProductImage(60), category: 'Уход за кожей', description: 'Atomy Absolute CellActive Toner — это первый шаг антивозрастного ухода, разработанный для глубокого увлажнения и подготовки кожи к следующему этапу. Формула тоника помогает восстановить pH-баланс после очищения, повышает эластичность кожи и делает её более восприимчивой к активным компонентам последующих средств.' },
  { id: 61, name: 'Absolute CellActive Serum', price: 1020, image: getProductImage(61), category: 'Уход за кожей', description: 'Сыворотка Absolute CellActive от Atomy — это интенсивное средство для антивозрастного ухода, разработанное для восстановления и укрепления кожи. Её активная формула помогает уменьшить признаки старения, выравнивает тон кожи и придаёт лицу более свежий, здоровый вид.' },
  { id: 62, name: 'Absolute CellActive Lotion', price: 935, image: getProductImage(62), category: 'Уход за кожей', description: 'это крем интенсивного действия, разработанный для глубокого увлажнения, восстановления структур кожи и поддержания её упругости. Крем содержит сочетание мощных антивозрастных компонентов, включая EGF-пептиды, пептидами́рованные белковые комплексы, ферментированные растительные экстракты и гиалуроновую кислоту.' },
  { id: 63, name: 'Absolute Cellactive крем вокруг глаз', price: 1020, image: getProductImage(63), category: 'Уход за кожей', description: 'Крем для кожи вокруг глаз Absolute CellActive разработан для комплексного ухода за чувствительной зоной глаз. Благодаря насыщенной формуле с пептидами и растительными экстрактами, он способствует уменьшению отёков, темных кругов и мелких морщин.' },
  { id: 64, name: 'Absolute CellActive крем для лица', price: 935, image: getProductImage(64), category: 'Уход за кожей', description: 'Питательный крем Absolute CellActive предназначен для глубокого ухода за зрелой кожей, нуждающейся в восстановлении и поддержке. Его формула помогает сохранить упругость и эластичность кожи, интенсивно увлажняет и защищает от внешних воздействий.' },
  { id: 65, name: 'Absolute BB No.21', price: 375, image: getProductImage(65), category: 'Макияж', description: 'Absolute BB No. 21 — это тональный ВВ-крем с лёгкой, шелковистой текстурой, разработанный для выравнивания тона лица и придания естественного сияния. Он обеспечивает среднее покрытие, скрывая покраснения, придавая коже ухоженный и свежий вид.' },
  { id: 66, name: 'Absolute BB No.23', price: 375, image: getProductImage(66), category: 'Макияж', description: 'Absolute BB No. 23 — это тональный ВВ-крем с лёгкой, шелковистой текстурой, разработанный для выравнивания тона лица и придания естественного сияния. Он обеспечивает среднее покрытие, скрывая покраснения, придавая коже ухоженный и свежий вид.' },
  { id: 67, name: 'Absolute Spot-Out cream', price: 750, image: getProductImage(67), category: 'Уход за кожей', description: 'Absolute Spot‑Out — это точечный крем, разработанный для борьбы с пигментацией и выравнивания тона лица. Особенно подходит для ухода за зонами с возрастными или постакне пятнами.' },
  { id: 68, name: 'Absolute Spot-Out Serum', price: 950, image: getProductImage(68), category: 'Уход за кожей', description: 'Absolute Spot-Out Serum — это точечный серум из линии Absolute CellActive, предназначенный для интенсивной работы с пигментными и возрастными пятнами. Средство помогает осветлить кожу, улучшить её тональность и создать ровный оттенок.' },
  { id: 69, name: 'Derma Real Cica Set', price: 1550, image: getProductImage(69), category: 'Уход за кожей', description: 'Derma Real Cica Set — это профессиональный уходовый комплекс, разработанный специально для чувствительной, раздражённой или склонной к акне кожи. Набор содержит сразу несколько средств (тонер, ампуль, крем и гелевый очищающий гель), которые работают в синергии.' },
  { id: 70, name: 'absolute spf', price: 360, image: getProductImage(70), category: 'Уход за кожей', description: 'Absolute Essence Sun — это лёгкая солнцезащитная эссенция с высокой защитой SPF 50+ и PA++++, разработанная для ежедневного использования. Крем быстро впитывается, не оставляя жирных следов или белого налёта, одновременно придаёт коже свежий, выровненный тон.' },
  { id: 71, name: 'Sunscreen SPF50+ PA+++(Beige)', price: 280, image: getProductImage(71), category: 'Уход за кожей', description: 'Absolute Essence Sun UV Protector — это лёгкий солнцезащитный крем-эссенция с высокой степенью защиты SPF 50+ и PA++++. Формула содержит как химические, так и минеральные фильтры, обеспечивающие надёжную защиту от UVA и UVB лучей.' },
  { id: 72, name: 'Sunscreen SPF50+ PA+++(White)', price: 280, image: getProductImage(72), category: 'Уход за кожей', description: 'Absolute Essence Sun UV Protector — это лёгкий солнцезащитный крем-эссенция с высокой степенью защиты SPF 50+ и PA++++. Формула содержит как химические, так и минеральные фильтры, обеспечивающие надёжную защиту от UVA и UVB лучей.' },
  { id: 73, name: 'Атоми ХемоХИМ', price: 3000, image: getProductImage(73), category: 'Пищевая добавка', description: 'Atomy ХемоХИМ — это биотехнологически разработанная пищевая добавка в виде порошка или капсул (точная форма зависит от упаковки), предназначенная для поддержки иммунной системы, укрепления здоровья и повышения общей жизненной энергии.' },
  { id: 74, name: 'красный женьшень', price: 1900, image: getProductImage(74), category: 'Пищевая добавка', description: 'Atomy Хонгсамдан Женьшень — это высококонцентрированный экстракт женьшеня красного, произведённый из пяти‑шестилетних корней, культивированных в чистом экологически благоприятном регионе.' },
  { id: 75, name: 'сок нони', price: 1700, image: getProductImage(75), category: 'Пищевая добавка', description: 'Organic Fermented Noni Concentrate — это органический концентрат ферментированного нони (иногда называют индийским морским перцем), выпускаемый в бутылочке с удобным дозатором.' },
  { id: 76, name: 'Absolute Ampoule', price: 1100, image: getProductImage(76), category: 'Уход за кожей', description: 'Absolute Ampoule — это высококонцентрированная сыворотка в формате 40 мл, разработанная по технологии Absolute. Содержит мультикомплекс активных компонентов, включая пептиды EGF, экстракт люпина, антиоксиданты из йосемитского горного чая и другие дорогостоящие ингредиенты.' },
]; 

// Функция валидации данных товаров
function validateProduct(product) {
  const errors = [];
  
  if (!product.id || typeof product.id !== 'number') {
    errors.push(`Товар "${product.name || 'Без названия'}": неверный ID`);
  }
  
  if (!product.name || typeof product.name !== 'string' || product.name.trim() === '') {
    errors.push(`Товар ID ${product.id}: отсутствует название`);
  }
  
  if (!product.price || typeof product.price !== 'number' || product.price <= 0) {
    errors.push(`Товар "${product.name}": неверная цена`);
  }
  
  if (!product.image || typeof product.image !== 'string' || product.image.trim() === '') {
    errors.push(`Товар "${product.name}": отсутствует изображение`);
  }
  
  if (!product.category || typeof product.category !== 'string' || product.category.trim() === '') {
    errors.push(`Товар "${product.name}": отсутствует категория`);
  }
  
  if (!product.description || typeof product.description !== 'string' || product.description.trim() === '') {
    errors.push(`Товар "${product.name}": отсутствует описание`);
  }
  
  return errors;
}

// Проверка данных при загрузке
function validateProductsData() {
  const allErrors = [];
  
  products.forEach(product => {
    const errors = validateProduct(product);
    allErrors.push(...errors);
  });
  
  if (allErrors.length > 0) {
    console.warn('Найдены ошибки в данных товаров:', allErrors);
  }
  
  // Проверка на дубликаты ID
  const ids = products.map(p => p.id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length > 0) {
    console.warn('Найдены дублирующиеся ID товаров:', duplicates);
  }
}

// Запуск валидации
validateProductsData();

// Функция рендера карточек
function renderProducts(list) {
  const container = document.getElementById('products-container');
  container.innerHTML = '';
  if (list.length === 0) {
    container.innerHTML = '<p>Товары не найдены.</p>';
    return;
  }
  list.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    const shortDesc = product.description.length > 80 ? product.description.slice(0, 80) + '...' : product.description;
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" onerror="this.src='img/placeholder.svg'">
      <h3>${product.name}</h3>
      <div class="category">${product.category}</div>
      <div class="description">${shortDesc}</div>
      <div class="card-actions">
        <div class="price">${product.price} MDL</div>
        <div class="card-buttons">
          <button class="order-btn" data-id="${product.id}">Заказать</button>
          <button class="details-btn" data-id="${product.id}">Подробнее</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Модальное окно
function showModal(product) {
  const modalBody = document.getElementById('modal-body');
  const modal = document.getElementById('modal');
  
  if (!modalBody || !modal) {
    console.error('Модальное окно не найдено');
    return;
  }
  
  modalBody.innerHTML = `
    <img src="${product.image}" alt="${product.name}" style="width:120px;height:120px;object-fit:contain;border-radius:0.7rem;margin-bottom:1rem;background:#fff;" onerror="this.src='img/placeholder.svg'">
    <h3 style="margin:0.2rem 0 0.5rem 0;color:var(--accent);">${product.name}</h3>
    <div class="category" style="color:#6a8bbd;margin-bottom:0.5rem;">${product.category}</div>
    <div class="description" style="margin-bottom:0.7rem;">${product.description}</div>
    <div class="price" style="font-weight:600;margin-bottom:1rem;">${product.price} MDL</div>
  `;
  modal.classList.add('show');
}

// Проверка наличия необходимых DOM элементов
function checkDOMElements() {
  const requiredElements = [
    'products-container',
    'search-input',
    'modal',
    'modal-body',
    'contacts'
  ];
  
  const missingElements = requiredElements.filter(id => !document.getElementById(id));
  
  if (missingElements.length > 0) {
    console.error('Отсутствуют необходимые DOM элементы:', missingElements);
    return false;
  }
  
  return true;
}

// Инициализация приложения с проверками
function initApp() {
  if (!checkDOMElements()) {
    console.error('Приложение не может быть инициализировано из-за отсутствующих элементов');
    return;
  }
  
  try {
    // Первый рендер
    renderProducts(products);
    
    // Добавляем обработчики событий
    const searchInput = document.getElementById('search-input');
    const modal = document.getElementById('modal');
    const modalClose = document.querySelector('.modal-close');
    const productsContainer = document.getElementById('products-container');
    
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        const filtered = products.filter(product =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        );
        renderProducts(filtered);
      });
    }
    
    if (productsContainer) {
      productsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('order-btn')) {
          const contactsElement = document.getElementById('contacts');
          if (contactsElement) {
            contactsElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
        if (e.target.classList.contains('details-btn')) {
          const id = +e.target.getAttribute('data-id');
          const product = products.find(p => p.id === id);
          if (product) {
            showModal(product);
          }
        }
      });
    }
    
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
      });
    }
    
    if (modal) {
      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('show');
        }
      });
    }
    
    console.log('Приложение успешно инициализировано');
    
  } catch (error) {
    console.error('Ошибка при инициализации приложения:', error);
  }
}

// Запуск приложения после загрузки DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
} 