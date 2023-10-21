// Header

const tStartHere = [
  {
    text: "Home",
    goTo: "#",
    icon: "AiOutlineHome",
  },
  {
    text: "Changelog",
    goTo: "#",
    icon: "HiOutlinePencilAlt",
  },
  {
    text: "Licenses",
    goTo: "#",
    icon: "PiSquareDuotone",
  },
] as const;

const tComponentsLeft = [
  {
    text: "Buttons",
    goTo: "#",
    icon: "TbHandFinger",
  },
  {
    text: "Inputs",
    goTo: "#",
    icon: "BsInputCursorText",
  },
  {
    text: "Avatars",
    goTo: "#",
    icon: "PiSquareDuotone",
  },
  {
    text: "Badges",
    goTo: "#",
    icon: "PiCircleThin",
  },
  {
    text: "Tooltips",
    goTo: "#",
    icon: "PiGearLight",
  },
  {
    text: "Notifications",
    goTo: "#",
    icon: "BiBell",
  },
];
const tComponentsRight = [
  {
    text: "Cards",
    goTo: "#",
    icon: "TbCards",
  },
  {
    text: "Tables",
    goTo: "#",
    icon: "PiSquareDuotone",
  },
  {
    text: "Modals",
    goTo: "#",
    icon: "RiQuestionAnswerFill",
  },
  {
    text: "Tabs",
    goTo: "#",
    icon: "TiTabsOutline",
  },
  {
    text: "Bread crumbs",
    goTo: "#",
    icon: "PiTagChevron",
  },
  {
    text: "Empty states",
    goTo: "#",
    icon: "PiSquareDuotone",
  },
];

const tComponents = [tComponentsLeft, tComponentsRight];

export const templatesMenu = [tStartHere, tComponents];

// Body
// Images
// Marketing Tools
import mt1 from "./../body/1_marketingTools/1.jpg";
import mt2 from "./../body/1_marketingTools/2.jpg";
import mt3 from "./../body/1_marketingTools/3.jpg";

// Video Tools
import vt1 from "./../body/2_videoTools/1.jpg";
import vt2 from "./../body/2_videoTools/2.jpg";
import vt3 from "./../body/2_videoTools/3.jpg";
import vt4 from "./../body/2_videoTools/4.jpg";
import vt5 from "./../body/2_videoTools/5.jpg";

// Image Tools
import it1 from "./../body/3_imageTools/1.jpg";
import it2 from "./../body/3_imageTools/2.jpg";
import it3 from "./../body/3_imageTools/3.jpg";
import it4 from "./../body/3_imageTools/4.jpg";
import it5 from "./../body/3_imageTools/5.jpg";

// Audio Tools
import at1 from "./../body/4_audioTools/1.jpg";
import at2 from "./../body/4_audioTools/2.jpg";

export const marketingTools = [
  {
    title: "Video Trimmer",
    text: "Trim individual videos and create the output you neeed",
    img: mt1,
    goTo: "#",
  },
  {
    title: "PPT to Video",
    text: "Create amazing videos using your PPT files with illumia",
    img: mt2,
    goTo: "#",
  },
  {
    title: "Publish to Socials",
    text: "Publish your media files to various social media",
    img: mt3,
    goTo: "#",
  },
] as const;

export const videoTools = [
  {
    title: "Text input",
    text: "3 components",
    img: vt1,
    goTo: "#",
  },
  {
    title: "Textarea input",
    text: "2 components",
    img: vt2,
    goTo: "#",
  },
  {
    title: "Checkbox Button",
    text: "2 components",
    img: vt3,
    goTo: "#",
  },
  {
    title: "Toggle button",
    text: "2 components",
    img: vt4,
    goTo: "#",
  },
  {
    title: "Dropdowns",
    text: "3 components",
    img: vt5,
    goTo: "#",
  },
] as const;

export const imageTools = [
  {
    title: "Text input",
    text: "3 components",
    img: it1,
    goTo: "#",
  },
  {
    title: "Textarea input",
    text: "2 components",
    img: it2,
    goTo: "#",
  },
  {
    title: "Checkbox Button",
    text: "2 components",
    img: it3,
    goTo: "#",
  },
  {
    title: "Toggle button",
    text: "2 components",
    img: it4,
    goTo: "#",
  },
  {
    title: "Dropdowns",
    text: "3 components",
    img: it5,
    goTo: "#",
  },
] as const;

export const audioTools = [
  {
    title: "Avatar photo",
    text: "4 components",
    img: at1,
    goTo: "#",
  },
  {
    title: "Avatar name",
    text: "4 components",
    img: at2,
    goTo: "#",
  },
] as const;
