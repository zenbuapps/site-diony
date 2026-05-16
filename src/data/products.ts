export interface Product {
  slug: string;
  name: string;
  en: string;
  tag: string;
  note: string;
  image: string;
  // Detail page content
  subtitle: string;
  en_subtitle: string;
  description: string[];
  en_description: string[];
  specs: { label: string; en_label: string; value: string; en_value: string }[];
  features: { title: string; en_title: string; desc: string; en_desc: string }[];
  applications: string[];
  en_applications: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "singing-bowls",
    name: "頌缽",
    en: "Singing Bowls",
    tag: "Tibetan · Hand-hammered",
    note: "手工敲製 · 銅合金",
    image: "/images/p-singing-bowls.png",
    subtitle: "千年療癒智慧，精密現代工藝",
    en_subtitle: "Ancient Healing Wisdom, Modern Precision Craft",
    description: [
      "源自喜馬拉雅山脈的頌缽傳統，結合麥法迪超過二十年的金屬加工技術，每一只缽都是手工敲製而成。銅合金的獨特配方讓缽音溫潤悠長，泛音層次豐富，能在空間中形成深沉的共鳴。",
      "我們嚴格控制每只缽的頻率誤差在 ±10Hz 以內，確保音療師與冥想練習者在每次使用時都能獲得穩定、一致的聲音體驗。",
    ],
    en_description: [
      "Rooted in the Himalayan tradition of singing bowls, combined with over twenty years of Dionysus metalworking expertise, each bowl is individually hand-hammered. Our proprietary bronze alloy creates a warm, sustained tone with rich overtones that fill any space with deep resonance.",
      "We strictly maintain frequency tolerance within ±10Hz for every bowl, ensuring sound therapists and meditation practitioners receive a consistent, reliable sonic experience every time.",
    ],
    specs: [
      { label: "材質", en_label: "Material", value: "銅合金（銅 80% · 錫 15% · 鋅 5%）", en_value: "Bronze Alloy (Cu 80% · Sn 15% · Zn 5%)" },
      { label: "工法", en_label: "Technique", value: "純手工敲製", en_value: "Hand-hammered" },
      { label: "頻率範圍", en_label: "Frequency Range", value: "130 – 800 Hz", en_value: "130 – 800 Hz" },
      { label: "頻率精度", en_label: "Frequency Tolerance", value: "±10 Hz", en_value: "±10 Hz" },
      { label: "尺寸選項", en_label: "Sizes Available", value: "4″ – 14″（客製尺寸可洽詢）", en_value: "4″ – 14″ (Custom sizes available)" },
      { label: "表面處理", en_label: "Finish", value: "仿古拋光 / 鏡面拋光", en_value: "Antique Polish / Mirror Polish" },
    ],
    features: [
      { title: "泛音層次豐富", en_title: "Rich Overtone Spectrum", desc: "多層次頻率共振，帶來深沉立體的聲音包覆感。", en_desc: "Multi-layered frequency resonance creates a deep, immersive sound envelope." },
      { title: "長延音設計", en_title: "Extended Sustain", desc: "缽壁厚度與合金比例精心調配，音波持續可達 90 秒以上。", en_desc: "Wall thickness and alloy ratio carefully calibrated for sustain exceeding 90 seconds." },
      { title: "OEM 客製友善", en_title: "OEM-Friendly Customization", desc: "可刻製品牌 Logo、指定音頻、客製包裝，最低訂量洽詢。", en_desc: "Brand logo engraving, custom frequencies, and packaging available — MOQ on request." },
    ],
    applications: ["冥想靜心", "聲音療癒（Sound Bath）", "瑜伽課程", "正念練習", "禮品與儀式"],
    en_applications: ["Meditation", "Sound Bath Therapy", "Yoga Classes", "Mindfulness Practice", "Gifts & Rituals"],
  },
  {
    slug: "wind-chimes",
    name: "風鈴",
    en: "Wind Chimes",
    tag: "Asia's #1 Manufacturer",
    note: "精準調音 · 鋁合金",
    image: "/images/p-wind-chimes.png",
    subtitle: "亞洲第一，精準調音的聲景藝術",
    en_subtitle: "Asia's #1 — The Art of Precision-Tuned Soundscapes",
    description: [
      "麥法迪是亞洲最大的風鈴製造商，每年出口超過 50 個國家。我們的風鈴並非單純裝飾品，而是運用音樂調式理論設計，每一支管都精確切割至對應音階，形成和諧悅耳的自然聲景。",
      "鋁合金管材具備耐候性強、音色清亮的特點。無論是五音階（Pentatonic）、大調（Major）或療癒頻率系列，皆可依需求訂製。",
    ],
    en_description: [
      "Dionysus is Asia's largest wind chime manufacturer, exporting to over 50 countries annually. Our wind chimes are not mere decorations — they are designed using music theory, with each tube precisely cut to a corresponding note, creating naturally harmonious soundscapes.",
      "Our aluminum alloy tubes offer superior weather resistance and bright, clear tones. Pentatonic, Major scale, or healing frequency series — all available for custom order.",
    ],
    specs: [
      { label: "材質", en_label: "Material", value: "航空級鋁合金管（6063-T5）", en_value: "Aerospace-grade Aluminum Alloy Tubes (6063-T5)" },
      { label: "調音方式", en_label: "Tuning Method", value: "CNC 精密切割 + 頻率儀校正", en_value: "CNC Precision Cut + Frequency Instrument Calibration" },
      { label: "音階選項", en_label: "Scale Options", value: "五音階、大調、療癒頻率、客製", en_value: "Pentatonic, Major, Healing Frequencies, Custom" },
      { label: "頻率精度", en_label: "Frequency Tolerance", value: "±10 Hz", en_value: "±10 Hz" },
      { label: "管數", en_label: "Tube Count", value: "5 / 6 / 8 管（客製可洽詢）", en_value: "5 / 6 / 8 tubes (Custom available)" },
      { label: "防候處理", en_label: "Weather Treatment", value: "陽極氧化 · 抗UV塗層", en_value: "Anodized · UV-resistant coating" },
    ],
    features: [
      { title: "亞洲最大製造商", en_title: "Asia's Largest Manufacturer", desc: "年產量超過百萬件，品質穩定，交期可靠。", en_desc: "Annual output exceeding one million units — consistent quality, reliable delivery." },
      { title: "科學化調音", en_title: "Scientific Tuning", desc: "每支管均通過頻率儀驗證，誤差控制在 ±10Hz 以內。", en_desc: "Every tube verified by frequency instrument, tolerance within ±10Hz." },
      { title: "全天候耐用", en_title: "All-Weather Durability", desc: "陽極氧化表面處理，適合室內外長期使用。", en_desc: "Anodized surface treatment for long-term indoor and outdoor use." },
    ],
    applications: ["療癒空間佈置", "冥想中心", "SPA 與養生館", "花園與戶外空間", "品牌禮品"],
    en_applications: ["Healing Space Décor", "Meditation Centers", "Spas & Wellness Studios", "Gardens & Outdoor Spaces", "Corporate Gifts"],
  },
  {
    slug: "sound-sticks",
    name: "手搖音束",
    en: "Tingsha Cymbals",
    tag: "Pure Tone · Resonance",
    note: "純粹音色 · 黃銅",
    image: "/images/p-sound-sticks.png",
    subtitle: "一擊清明，純粹頻率的瞬間覺知",
    en_subtitle: "One Strike, One Moment of Pure Clarity",
    description: [
      "丁沙（Tingsha）源自藏傳佛教儀式，是音療師與冥想引導者常用的「聲音信號器」。清脆的金屬碰擊聲能瞬間穿透雜念，帶領心靈回到當下。",
      "麥法迪的丁沙以高純度黃銅鑄造，每對都通過配對調音，確保兩片缽鈸音高一致，共鳴時形成純淨的單頻波型，適合冥想開始與結束的儀式性使用。",
    ],
    en_description: [
      "Tingsha cymbals originate from Tibetan Buddhist ritual practice and are a favored 'sonic signal' tool among sound therapists and meditation guides. Their crisp metallic ring instantly cuts through mental noise, returning the mind to the present moment.",
      "Dionysus Tingshas are cast from high-purity brass, with each pair individually matched and tuned to ensure both cymbals produce identical pitches — creating a pure, single-frequency waveform ideal for opening and closing meditation rituals.",
    ],
    specs: [
      { label: "材質", en_label: "Material", value: "高純度黃銅（Cu 85% · Zn 15%）", en_value: "High-purity Brass (Cu 85% · Zn 15%)" },
      { label: "工法", en_label: "Technique", value: "精密鑄造 + 手工修整", en_value: "Precision Cast + Hand-finished" },
      { label: "配對調音", en_label: "Pair Tuning", value: "每對個別配對，頻率誤差 < ±5Hz", en_value: "Individually matched pairs, tolerance < ±5Hz" },
      { label: "直徑", en_label: "Diameter", value: "55mm / 70mm / 85mm", en_value: "55mm / 70mm / 85mm" },
      { label: "連接材質", en_label: "Cord Material", value: "真皮繩 / 尼龍繩（可選）", en_value: "Genuine Leather / Nylon (selectable)" },
      { label: "延音時間", en_label: "Sustain", value: "約 15–30 秒", en_value: "Approx. 15–30 seconds" },
    ],
    features: [
      { title: "純粹單頻音色", en_title: "Pure Single-Frequency Tone", desc: "精密配對確保兩片音高一致，共鳴純淨無雜波。", en_desc: "Precision pairing ensures identical pitch, producing clean resonance without interference." },
      { title: "隨身攜帶方便", en_title: "Compact & Portable", desc: "輕盈小巧，適合課程、工作坊、旅行使用。", en_desc: "Lightweight and compact — ideal for classes, workshops, and travel." },
      { title: "儀式感設計", en_title: "Ritual Aesthetic Design", desc: "傳統藏式紋樣可選，搭配精美絨布袋包裝。", en_desc: "Optional traditional Tibetan pattern engravings, with premium velvet pouch packaging." },
    ],
    applications: ["冥想開場與收尾", "正念課程", "瑜伽課程信號", "聲音療癒引導", "禮品包裝"],
    en_applications: ["Meditation Opening & Closing", "Mindfulness Classes", "Yoga Class Signals", "Sound Healing Sessions", "Gift Sets"],
  },
  {
    slug: "crystal-bowls",
    name: "水晶缽",
    en: "Crystal Bowls",
    tag: "Quartz · Pure Frequency",
    note: "石英晶體 · 純音",
    image: "/images/p-crystal-bowls.png",
    subtitle: "石英晶體的純淨共鳴，脈輪療癒核心",
    en_subtitle: "Pure Quartz Resonance — The Heart of Chakra Healing",
    description: [
      "水晶缽以 99.99% 高純度石英砂為原料，經高溫熔融成型，每只缽發出的是單一純淨基頻，音波穿透力強，能深層滲透人體組織，帶來獨特的體感共鳴。",
      "麥法迪與頂級晶體製造商合作，提供透明、磨砂及彩虹光澤三種表面處理。七脈輪頻率組合為最受歡迎的套組選擇，亦可單只訂購指定音符。",
    ],
    en_description: [
      "Crystal bowls are crafted from 99.99% pure quartz sand, fused at high temperature to form a vessel that produces a single, pure fundamental frequency. The sound waves penetrate deeply into body tissue, creating a unique somatic resonance experience.",
      "Dionysus partners with premier crystal manufacturers to offer clear, frosted, and iridescent rainbow surface treatments. Seven-chakra frequency sets are our most popular configuration, with individual note orders also welcome.",
    ],
    specs: [
      { label: "材質", en_label: "Material", value: "99.99% 高純度石英砂", en_value: "99.99% High-purity Quartz Sand" },
      { label: "製程", en_label: "Process", value: "高溫熔融成型（2000°C）", en_value: "High-temperature fusion molding (2000°C)" },
      { label: "頻率選項", en_label: "Frequency Options", value: "C D E F G A B（七脈輪頻率）及客製", en_value: "C D E F G A B (Seven Chakra frequencies) and custom" },
      { label: "尺寸", en_label: "Sizes", value: "6″ – 24″", en_value: "6″ – 24″" },
      { label: "表面處理", en_label: "Surface Finish", value: "透明 / 磨砂 / 彩虹鍍膜", en_value: "Clear / Frosted / Rainbow Iridescent" },
      { label: "重量（10″）", en_label: "Weight (10″)", value: "約 1.8 – 2.5 kg", en_value: "Approx. 1.8 – 2.5 kg" },
    ],
    features: [
      { title: "極純淨單頻", en_title: "Ultra-Pure Single Frequency", desc: "石英材質產生近乎完美的正弦波，泛音極少，音色純淨。", en_desc: "Quartz produces a near-perfect sine wave with minimal overtones — an exceptionally pure tone." },
      { title: "強烈體感共鳴", en_title: "Powerful Somatic Resonance", desc: "低頻大缽的音波可被人體直接感知，適合深層療癒工作。", en_desc: "Sound waves from larger bass bowls can be physically felt, ideal for deep healing work." },
      { title: "視覺療癒雙效", en_title: "Visual & Sonic Healing", desc: "彩虹鍍膜缽兼具視覺美感，在燈光下呈現迷幻光澤。", en_desc: "Rainbow iridescent bowls offer both sonic and visual beauty, shimmering under light." },
    ],
    applications: ["脈輪療癒", "聲音冥想", "氣場清理", "療癒中心", "身心靈課程"],
    en_applications: ["Chakra Healing", "Sound Meditation", "Aura Cleansing", "Healing Centers", "Mind-Body-Spirit Courses"],
  },
  {
    slug: "tuning-forks",
    name: "音叉",
    en: "Tuning Forks",
    tag: "Therapy Grade · 128–4096Hz",
    note: "音叉療法級",
    image: "/images/p-tuning-forks.png",
    subtitle: "科學頻率校具，精準音療工具",
    en_subtitle: "Scientific Frequency Standards — Precision Sound Therapy Tools",
    description: [
      "音叉療法（Tuning Fork Therapy）近年在歐美聲音治療領域迅速普及，作為精準頻率輸出工具，音叉能將特定頻率直接傳遞至人體穴位或氣場，具有非侵入性的獨特優勢。",
      "麥法迪的療癒級音叉採用航空不鏽鋼合金製造，頻率誤差控制在 ±0.5Hz 以內（遠優於一般市售產品的 ±3Hz），適合專業音療師、整合醫學從業者及聲音課程教育使用。",
    ],
    en_description: [
      "Tuning Fork Therapy has rapidly gained popularity in European and American sound healing fields. As a precise frequency delivery tool, tuning forks can transmit specific frequencies directly to acupressure points or biofields — a uniquely non-invasive approach.",
      "Dionysus therapy-grade tuning forks are manufactured from aerospace-grade stainless steel alloy with frequency tolerance within ±0.5Hz — far superior to the typical market standard of ±3Hz — suitable for professional sound therapists, integrative medicine practitioners, and sound education.",
    ],
    specs: [
      { label: "材質", en_label: "Material", value: "航空級不鏽鋼合金（304）", en_value: "Aerospace-grade Stainless Steel Alloy (304)" },
      { label: "頻率範圍", en_label: "Frequency Range", value: "128 Hz – 4096 Hz", en_value: "128 Hz – 4096 Hz" },
      { label: "頻率精度", en_label: "Frequency Tolerance", value: "±0.5 Hz（遠優於業界標準）", en_value: "±0.5 Hz (Far superior to industry standard)" },
      { label: "常用頻率", en_label: "Common Frequencies", value: "128 / 256 / 432 / 440 / 528 / 741 / 852 Hz", en_value: "128 / 256 / 432 / 440 / 528 / 741 / 852 Hz" },
      { label: "表面處理", en_label: "Finish", value: "拉絲不鏽鋼", en_value: "Brushed Stainless Steel" },
      { label: "附件", en_label: "Accessories", value: "天鵝絨收納袋、啟動橡皮錘（可選）", en_value: "Velvet pouch, activating mallet (optional)" },
    ],
    features: [
      { title: "極致頻率精度", en_title: "Extreme Frequency Precision", desc: "±0.5Hz 容差，確保每次療程都是科學可信賴的頻率輸出。", en_desc: "±0.5Hz tolerance ensures every session delivers scientifically reliable frequency output." },
      { title: "非接觸式療癒", en_title: "Non-Contact Healing", desc: "音叉可置於穴位附近的氣場中使用，不需直接接觸皮膚。", en_desc: "Can be used in the biofield near acupressure points without direct skin contact." },
      { title: "專業套組可選", en_title: "Professional Sets Available", desc: "神聖頻率系列、索爾費吉歐系列、五度音程系列等多種套組。", en_desc: "Sacred Frequency Series, Solfeggio Series, Pythagorean Interval Series, and more." },
    ],
    applications: ["音叉療法治療", "氣場調頻", "生物場調頻", "脊骨調整輔助", "聲音課程教學"],
    en_applications: ["Tuning Fork Therapy", "Aura Frequency Tuning", "Biofield Tuning", "Chiropractic Support", "Sound Education"],
  },
  {
    slug: "mallets",
    name: "頌缽棒組",
    en: "Mallets & Strikers",
    tag: "Wood · Felt · Suede",
    note: "多材質 · 搭配各類缽具",
    image: "/images/p-mallets.png",
    subtitle: "每種材質，解鎖不同的聲音維度",
    en_subtitle: "Every Material Unlocks a Different Sonic Dimension",
    description: [
      "頌缽棒的材質直接影響缽音的音色與泛音結構。木頭敲擊產生明亮清脆的高頻泛音；羊毛氈棒帶出溫暖飽滿的中低頻；麂皮棒則適合摩擦缽緣，引發持續綿長的共鳴。",
      "麥法迪的棒組針對不同缽具做優化設計，無論搭配銅缽、水晶缽或丁沙，都能找到最適合的發聲工具。同時提供 OEM 刻印服務，適合品牌套組出品。",
    ],
    en_description: [
      "The material of a mallet directly affects the tone and overtone structure of the bowl's sound. Wooden strikers produce bright, crisp high-frequency overtones; wool felt mallets draw out warm, full mid-to-low frequencies; suede mallets are ideal for rubbing the rim to generate sustained, flowing resonance.",
      "Dionysus mallet sets are optimized for different bowl types — whether for bronze bowls, crystal bowls, or tingshas, you'll find the perfect tool to unlock the sound. OEM engraving services available for branded sets.",
    ],
    specs: [
      { label: "握柄材質", en_label: "Handle Material", value: "胡桃木 / 楓木 / 榉木（可選）", en_value: "Walnut / Maple / Beech (selectable)" },
      { label: "棒頭材質", en_label: "Tip Material", value: "原木 / 羊毛氈 / 麂皮 / 橡膠（可混搭）", en_value: "Raw Wood / Wool Felt / Suede / Rubber (mixable)" },
      { label: "規格", en_label: "Sizes", value: "S / M / L / XL（對應 4″–14″ 缽）", en_value: "S / M / L / XL (for 4″–14″ bowls)" },
      { label: "表面處理", en_label: "Finish", value: "天然蜂蠟木油", en_value: "Natural Beeswax Wood Oil" },
      { label: "套組選項", en_label: "Set Options", value: "單支 / 3支組 / 5支組 / 7支組", en_value: "Single / 3-piece / 5-piece / 7-piece sets" },
      { label: "OEM服務", en_label: "OEM Service", value: "烙印 / 雷射刻字 / 客製包裝", en_value: "Branding / Laser Engraving / Custom Packaging" },
    ],
    features: [
      { title: "多材質音色系統", en_title: "Multi-Material Tonal System", desc: "一套棒組涵蓋多種音色變化，讓療癒師靈活運用。", en_desc: "A single mallet set covers a full range of tonal variations for flexible therapeutic use." },
      { title: "專為缽具優化", en_title: "Bowl-Optimized Design", desc: "每支棒的重量與彈性針對特定缽型調整，確保最佳發音效果。", en_desc: "Each mallet's weight and flexibility is adjusted for specific bowl types for optimal sound." },
      { title: "品牌客製友善", en_title: "Brand Customization Ready", desc: "可烙印品牌標誌、客製包裝盒，適合套組禮品出品。", en_desc: "Brand logo branding and custom gift box packaging available for retail set products." },
    ],
    applications: ["頌缽療癒", "水晶缽冥想", "聲音工作坊配件", "音療師工具包", "品牌套組禮品"],
    en_applications: ["Singing Bowl Healing", "Crystal Bowl Meditation", "Sound Workshop Accessories", "Sound Therapist Tool Kits", "Branded Gift Sets"],
  },
];
