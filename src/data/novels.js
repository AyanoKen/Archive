const imageModules = import.meta.glob("../assets/images/*.{png,jpg,jpeg,avif}", {
  eager: true,
  import: "default",
})

const image = (path) => imageModules[`../assets/images/${path}`]

const novels = [
  {
    id: "shrine",
    theme: "shrine",
    tabLabel: "Shrine",
    title: "Shrine: Silent Hope",
    subtitle: "A Romance Horror Story",
    blurb:
      "A shrine-bound romance wrapped in grief, faith, and the quiet dread of what devotion can demand.",
    background: image("shrine-bg.png"),
    cover: image("shrine-bg.png"),
    chapters: [
      {
        title: "Chapter 1",
        url: "https://docs.google.com/document/d/e/2PACX-1vQ_DzRVf1qZjo1JYyUTd-NdnbC-ohg2IF4ZcRzs4bEnYKtUQ6oDMoY23v6awetiidXYFpsDuNbZAAZ1/pub?embedded=true",
      },
    ],
  },
  {
    id: "impostor",
    theme: "impostor",
    tabLabel: "Impostor's Love",
    title: "Impostor's Love",
    subtitle: "A Fantasy Romance Story",
    blurb:
      "A fantasy romance shaped by disguise, longing, and the dangerous tenderness between who someone is and who they pretend to be.",
    background: image("Love.jpeg"),
    cover: image("Love2.jpeg"),
    chapters: [
      {
        title: "Chapter 1",
        url: "https://docs.google.com/document/d/e/2PACX-1vSqBOgsUADerYfK3GaqYx1966NkqK_5cAWnWtPSFz9oYM39jgiM7rawMBG0E5OzH8efQFS3Brej7_Fo/pub?embedded=true",
      },
      {
        title: "Chapter 2",
        url: "https://docs.google.com/document/d/e/2PACX-1vR56vt-CC-yF1_J9r3P8KmQVzkTknTPjMfqrijoBwERRUMxOAgbqJixxDIlYaGUgKT5dyqsZhcyG234/pub?embedded=true",
      },
      {
        title: "Chapter 3",
        url: "https://docs.google.com/document/d/e/2PACX-1vSUIKjXAnf-IDg6gHvP161oCBbmWrY14eTR32UigaTg1BnlplpgJk4Wt_sSttxegKXTAaspzACLddAs/pub?embedded=true",
      },
      {
        title: "Chapter 4",
        url: "https://docs.google.com/document/d/e/2PACX-1vQW1sAZbJZ2VFn9Yj5tN7pxHv5r0UbVh6UHOz9qhp_iBh2gE_zjhd7RFYpOUzAzYtnIlIOefhL720Ex/pub?embedded=true",
      },
      {
        title: "Chapter 5",
        url: "https://docs.google.com/document/d/e/2PACX-1vSrX8lQs6M6F4oQNYiOcRna15oPIz2M5CeCgZpvwn6Cuvaehetv87A2xHG5HXMuN6AJRhNUoNVkg0fR/pub?embedded=true",
      },
      {
        title: "Chapter 6",
        url: "https://docs.google.com/document/d/e/2PACX-1vQI6TpCeHYDpz2OJJycCq7MZACIbz5-Vtnivd176EL_RRCGNoDI7VJ_3Ttyf4wBLTByKDLrFtKHRVvY/pub?embedded=true",
      },
    ],
  },
]

export default novels
