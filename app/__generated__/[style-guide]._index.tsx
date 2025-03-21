/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, RichTextLink as RichTextLink, Link as Link, Form as Form } from "@webstudio-is/sdk-components-react-router";
import { Box as Box, Slot as Slot, Fragment as Fragment_1, Heading as Heading, Text as Text, Paragraph as Paragraph, CodeText as CodeText, List as List, ListItem as ListItem, Span as Span, Blockquote as Blockquote, Separator as Separator, Image as Image, HtmlEmbed as HtmlEmbed, Input as Input, Button as Button } from "@webstudio-is/sdk-components-react";


      export const siteName = "Visual Designer";

      export const breakpoints = [{"id":"jAWQK3_7D18H_5v0pK0z4"},{"id":"mONS0so-VrF1uS9rPlVcF","maxWidth":991},{"id":"zGIdqUzdPde7sHmF0aRQP","maxWidth":767},{"id":"wP-rcJFENR2yn86VzREAn","maxWidth":479}];

      export const favIconAsset: string | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["Epilogue-VariableFont_wght_UMmD5uKuAMfCr3au74g5m.ttf"]

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
let [formState, set$formState] = useVariableState<any>("initial")
return <Body
id={"top"}
className={`w-body`}>
<Box
className={`w-box c33xfh3 c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lfjoq7 c11ykhog c1kt5iwx`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
className={`w-heading c11nr3ex c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Style Guide"}
</Heading>
<Text
className={`w-text c1nkzcyu che9upb`}>
{"Craft Version 1.0"}
</Text>
<Paragraph
className={`w-paragraph cz5g8eb c1nkzcyu`}>
{"Here is the community style guide according to "}
<RichTextLink
href={"https://docs.webstudio.is/university/craft"}
target={"_blank"}
className={`w-rich-text-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"Craft"}
</RichTextLink>
{", the recommended starting point for Webstudio Projects. "}
<RichTextLink
href={"https://docs.webstudio.is/university/foundations/css-variables"}
target={"_blank"}
className={`w-rich-text-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"CSS variables"}
</RichTextLink>
{" containing colors, sizes, and more are on the Global Root. "}
</Paragraph>
</Box>
<Box
id={"layout"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Layout"}
</Heading>
</Box>
<Box
className={`w-box copqmak c9sypx0 c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c33xfh3 c1mzb2kd c1vaudkt cci8rp4 c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"section"}
</Text>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c2keyc8 cnkorcr c1ldum37 c5tmc3l c1fhkm63 clv8gve c1lfjoq7 ca4qjwu c1cdc69r c1357293 c9jnjeu czr2pxy c155uc7w ck4tzbx`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"container"}
</Text>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 copqmak c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 c10zkoym ct8c5y2 c1f64byh ck4tzbx c1g7fxd7 cx6c9kw c174sw29`}>
<Box
className={`w-box c7rvndl c2w8hv4`}>
<Text
className={`w-text c1yehcfp c1umavhe caipwxg cbvffy can94pj cuccfz7 cir85gx c1qom380 cr8yqfm c1ufwdzl c5blvcv cml0h3f c5m8ase clv8gve`}>
{"grid"}
</Text>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Grid quickly provides the properties to create a grid. Once added, switch over to Local and type in your template columns."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Note, grid turns into flex on 767. This is because grid children may use start/end columns and would require us to reset each one manually on mobile. By setting the parent to flex, those values are ignored."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
id={"colors"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Colors"}
</Heading>
<Paragraph
className={`w-paragraph che9upb c1rco612`}>
{"Change these values on the Global Root. It's best practice to map semantic variables such as "}
<Span
className={`w-text-1 c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`}>
{"--foreground-primary"}
</Span>
{" to another variable such as "}
<Span
className={`w-text-1 c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`}>
{"--gray-10"}
</Span>
{"."}
</Paragraph>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i`}>
{"Foreground"}
</Heading>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-primary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c12y6bqh c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-secondary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1bd9ep2 ck4tzbx`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-accent"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cpp0nin c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-muted"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 czt9u4x c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-border"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cchda18 c6pvryr`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i`}>
{"Background"}
</Heading>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-primary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cvgv9nf ck4tzbx`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-secondary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1llqm3g c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-accent"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1iv8y8b c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-card"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cow0ixc c6pvryr`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i`}>
{"Other"}
</Heading>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--focus-color"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c17o0p2u c6pvryr`} />
</Box>
</Box>
</Box>
<Box
id={"links-buttons"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Buttons and Links"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c16xs6ny c1wt8a7g c1fhkm63 clv8gve c1lfjoq7 c133lpx4 c14u5o53 ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"button-group"}
</Text>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c17drxn3 cvj021w c15cml01`}>
<Link
className={`w-link c1uz1hxp cl8m66n c1b2tb9q c1xm4ef6 c1a8d7ts c122t6uk c1gut7ra cvyaqlm c1wn9gbn ckhl5v6 c135vpv5 c1nouzdk c1qom380 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cqrpgto cl60rel c1ib9cr2 cmpnn5a`}>
{"button"}
</Link>
<Link
className={`w-link c1mtjugd c1e7helk c1b2tb9q c1xm4ef6 c1a8d7ts c122t6uk c1gut7ra cvyaqlm c1wn9gbn ckhl5v6 c135vpv5 c1nouzdk c1qom380 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p ckz5c6u cl60rel c1ib9cr2 cmpnn5a`}>
{"is-button-secondary"}
</Link>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c16xs6ny c1wt8a7g c1fhkm63 clv8gve c1lfjoq7 c133lpx4 c14u5o53 ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"link"}
</Text>
<Link
className={`w-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"Link text you can edit"}
</Link>
<Link
className={`w-link czdbake cld4m44 c135vpv5 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"is-link-nav"}
</Link>
<Link
className={`w-link czdbake csru8nn c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p c1xty5yn c1g1x4wk cl60rel c1ib9cr2 cnsdrup`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 26 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.3895 12.2844C9.57651 12.2844 8.93601 12.9969 8.93601 13.8669C8.93601 14.7339 9.59151 15.4494 10.3895 15.4494C11.201 15.4494 11.8415 14.7339 11.8415 13.8669C11.858 12.9954 11.201 12.2844 10.3895 12.2844ZM15.5915 12.2844C14.7785 12.2844 14.138 12.9969 14.138 13.8669C14.138 14.7339 14.7935 15.4494 15.5915 15.4494C16.403 15.4494 17.0435 14.7339 17.0435 13.8669C17.042 12.9954 16.403 12.2844 15.5915 12.2844Z\" fill=\"currentColor\"></path>\n<path d=\"M22.517 0.327881H3.42051C3.036 0.328865 2.65545 0.405574 2.30058 0.553629C1.94572 0.701684 1.62349 0.918186 1.35229 1.19077C1.0811 1.46336 0.866253 1.78669 0.720018 2.14231C0.573782 2.49793 0.499023 2.87887 0.50001 3.26338V22.5294C0.50001 24.1539 1.81101 25.4649 3.42051 25.4649H19.58L18.8225 22.8264L20.648 24.5229L22.3715 26.1189L25.4375 28.8279V3.26338C25.4385 2.87887 25.3637 2.49793 25.2175 2.14231C25.0713 1.78669 24.8564 1.46336 24.5852 1.19077C24.314 0.918186 23.9918 0.701684 23.6369 0.553629C23.2821 0.405574 22.9015 0.328865 22.517 0.327881ZM17.015 18.9384C17.015 18.9384 16.502 18.3264 16.076 17.7819C17.942 17.2539 18.6545 16.0869 18.6545 16.0869C18.0695 16.4709 17.5145 16.7439 17.015 16.9299C15.1965 17.6909 13.194 17.8986 11.258 17.5269C10.5427 17.3864 9.84173 17.1805 9.16401 16.9119C8.80658 16.7761 8.45922 16.6152 8.12451 16.4304C8.08101 16.3989 8.03901 16.3869 7.99701 16.3584C7.97454 16.3477 7.9546 16.3324 7.93851 16.3134C7.68201 16.1724 7.53951 16.0734 7.53951 16.0734C7.53951 16.0734 8.22351 17.2134 10.034 17.7549C9.60651 18.2949 9.07851 18.9384 9.07851 18.9384C5.93001 18.8379 4.73451 16.7724 4.73451 16.7724C4.73451 12.1839 6.78651 8.46538 6.78651 8.46538C8.83851 6.92488 10.79 6.96838 10.79 6.96838L10.9325 7.13938C8.36751 7.88188 7.18401 9.00688 7.18401 9.00688C7.18401 9.00688 7.49901 8.83588 8.02551 8.59438C9.54951 7.92538 10.76 7.73938 11.2595 7.69588C11.345 7.68238 11.417 7.66738 11.5025 7.66738C13.9733 7.33441 16.4857 7.80398 18.6695 9.00688C18.6695 9.00688 17.543 7.93888 15.1205 7.19788L15.32 6.96988C15.32 6.96988 17.273 6.92638 19.3235 8.46688C19.3235 8.46688 21.3755 12.1854 21.3755 16.7739C21.3755 16.7739 20.165 18.8379 17.015 18.9384Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
</Box>
</Box>
</Box>
<Box
id={"typography"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Elements"}
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"heading-1|2|3|4|5|6"}
</Text>
<Heading
className={`w-heading c11nr3ex c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Heading 1 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Heading 2 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i`}>
{"Heading 3 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c160atll c11dowh9 c32myit cwrra4i`}>
{"Heading 4 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1kol985 c11dowh9 c32myit cwrra4i`}>
{"Heading 5 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1kol985 c11dowh9 c32myit cwrra4i`}>
{"Heading 6 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines"}
</Paragraph>
<Blockquote
className={`w-blockquote cwrra4i c1mwdnfw cm42med cptxs8s csdfh58`}>
<Span
className={`w-text-1 c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"blockquote"}
</Span>
{" text you can edit"}
</Blockquote>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"list"}
</Text>
<List
className={`w-list`}>
<ListItem
className={`w-list-item`}>
<Span
className={`w-text-1 c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"list-item"}
</Span>
{" text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
</List>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"separator"}
</Text>
<Separator
className={`w-separator c2uxojo czr2pxy c32myit cwrra4i`} />
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"code"}
</Text>
<CodeText
code={"console.log(\"Hello World\");"}
lang={""}
className={`w-code-text c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`} />
</Box>
</Box>
<Box
id={"forms"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Forms"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"radix"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Radix"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"utility"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Utility"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"slots"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Slots"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-slot"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"custom"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Custom"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Card"}
</Text>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 c1qyy4dh c1qom380 c1p8k1aa`}>
<Box
className={`w-box`}>
<Image
alt={"Arrow going up"}
className={`w-image`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i`}>
{"Product Design"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"}
</Paragraph>
</Box>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"is-card-gallery"}
</Text>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 c16xs6ny cuj80l1 c1p8k1aa`}>
<Box
className={`w-box`}>
<Image
alt={"Book and plant"}
className={`w-image`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading c160atll c11dowh9 c32myit cwrra4i`}>
{"Product Design"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"}
</Paragraph>
</Box>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"is-card-testimonial"}
</Text>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 ca4qjwu c1cdc69r c16xs6ny cuj80l1 c5t8s5h c1g7fxd7`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th`}>
<Paragraph
className={`w-paragraph c1cb3y4c`}>
{"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c16xs6ny c18v2pa2 c1lxiyww c1z0l37u c1ml0hr7`}>
<Image
alt={"Picuture of Gemma"}
className={`w-image c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c16o38hn`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th`}>
<Image
alt={"5 stars"}
className={`w-image`} />
<Text
className={`w-text c1cb3y4c c10tv7lx`}>
{"Gemma Nolen"}
</Text>
<Text
className={`w-text`}>
{"Google"}
</Text>
</Box>
</Box>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"notes"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Notes"}
</Heading>
<Paragraph
className={`w-paragraph che9upb c1rco612`}>
{"Add notes for yourself or other creators that explain any nuances of the build."}
</Paragraph>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c16xs6ny c1wt8a7g c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Paragraph
className={`w-paragraph`}>
{"The following CSS variables were the modifications or additions made to the default "}
<RichTextLink
className={`w-rich-text-link`}>
{"Craft"}
</RichTextLink>
{" variables, jyfi."}
</Paragraph>
<CodeText
code={"--foreground-primary: var(--gray-12);\n--foreground-secondary: var(--gray-0);\n--foreground-accent: var(--red-6):\n--foreground-muted: unset;\n--foreground-border: var(--foreground-primary);\n\n--background-primary: var(--gray-0);\n--background-secondary: var(--gray-3);\n--background-accent: var(--gray-12);\n--background-card: var(--background-primary);\n\n--focus-color: var(--red-6);\n\n--gap-xs: var(--size-1);\n--gap-m: var(--size-fluid-4);\n\n--gray-0: #FFFFFF;\n--gray-1: unset;\n--gray-2: unset;\n--gray-3: #F3F3F3;\n--gray-4: unset;\n--gray-5: unset;\n--gray-6: unset;\n--gray-7: unset;\n--gray-8: unset;\n--gray-9: unset;\n--gray-10: unset;\n--gray-11: unset;\n--gray-12: #2D2D2D;\n\n--green-0: unset;\n--green-1: unset;\n--green-2: unset;\n--green-3: unset;\n--green-4: unset;\n--green-5: unset;\n--green-6: #009379;\n--green-7: unset;\n--green-8: unset;\n--green-9: unset;\n--green-10: unset;\n--green-11: unset;\n--green-12: unset;\n\n--red-0: unset;\n--red-1: unset;\n--red-2: unset;\n--red-3: unset;\n--red-4: unset;\n--red-5: unset;\n--red-6: #FF6250;\n--red-7: unset;\n--red-8: unset;\n--red-9: unset;\n--red-10: unset;\n--red-11: unset;\n--red-12: unset;\n\n--pink-0: unset;\n--pink-1: unset;\n--pink-2: unset;\n--pink-3: unset;\n--pink-4: #F3AFA8;\n--pink-5: unset;\n--pink-6: unset;\n--pink-7: unset;\n--pink-8: unset;\n--pink-9: unset;\n--pink-10: unset;\n--pink-11: unset;\n--pink-12: unset;\n\n--yellow-0: unset;\n--yellow-1: unset;\n--yellow-2: unset;\n--yellow-3: unset;\n--yellow-4: #F7D684;\n--yellow-5: unset;\n--yellow-6: unset;\n--yellow-7: unset;\n--yellow-8: unset;\n--yellow-9: unset;\n--yellow-10: unset;\n--yellow-11: unset;\n--yellow-12: unset;"}
className={`w-code-text c2i0393 c19evryj cntnubm c16hrg7f c1qakuu0 czr2pxy cz20ayj cf58xc1`} />
</Box>
</Box>
</Box>
</Box>
<Box
tag={"nav"}
className={`w-box c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1sl0nnp c1qakuu0 c47o47j cw5izhw`}>
<Box
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c18v2pa2 co39b1z`}>
<Link
href={"/style-guide#layout"}
className={`w-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"Layout"}
</Link>
<Link
href={"/style-guide#colors"}
className={`w-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"Colors"}
</Link>
<Link
href={"/style-guide#links-buttons"}
className={`w-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"Links & Buttons"}
</Link>
<Link
href={"/style-guide#typography"}
className={`w-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"Typography"}
</Link>
<Link
href={"/style-guide#forms"}
className={`w-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"Forms"}
</Link>
<Link
href={"/style-guide#radix"}
className={`w-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"Radix"}
</Link>
<Link
href={"/style-guide#utility"}
className={`w-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"Utility"}
</Link>
<Link
href={"/style-guide"}
className={`w-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"Slots"}
</Link>
<Link
href={"/style-guide#custom"}
className={`w-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"Custom"}
</Link>
<Link
href={"/style-guide#notes"}
className={`w-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cnsdrup`}>
{"Notes"}
</Link>
</Box>
</Box>
</Box>
<Box
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1md20bl c1e892th c33xfh3 c1mzb2kd c1qyy4dh ct02u4h`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"👇Template for new pages👇"}
</Heading>
<Paragraph
className={`w-paragraph c1rco612 c1qom380 czt9u4x`}>
{"When creating a new page, you can copy the \"Page Wrapper\" instance below (see navigator) and paste it on the new page. It contains the skeleton of a page, including a nav, footer, and section."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Box
tag={"main"}
className={`w-box`}>
<Box
tag={"section"}
className={`w-box c33xfh3 c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lfjoq7 ca4qjwu c1cdc69r`} />
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
id={"contact"}
className={`w-box c33xfh3 c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lfjoq7 c10zkoym ct8c5y2`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c10r87ok c11dowh9 c32myit cwrra4i`}>
{"Lets work together"}
</Heading>
<Box
className={`w-box copqmak c10zkoym ct8c5y2 c109i5bh cx6c9kw c174sw29`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1s46o9r cdczzub`}>
<Paragraph
className={`w-paragraph c6oj68y`}>
{"Ready to bring your vision to life? Let’s create something amazing together."}
</Paragraph>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c1z0l37u c1ml0hr7`}>
<Link
aria-label={"Discord"}
className={`w-link czdbake csru8nn c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p c1xty5yn c1g1x4wk cl60rel c1ib9cr2 cnsdrup`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 26 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.3895 12.2844C9.57651 12.2844 8.93601 12.9969 8.93601 13.8669C8.93601 14.7339 9.59151 15.4494 10.3895 15.4494C11.201 15.4494 11.8415 14.7339 11.8415 13.8669C11.858 12.9954 11.201 12.2844 10.3895 12.2844ZM15.5915 12.2844C14.7785 12.2844 14.138 12.9969 14.138 13.8669C14.138 14.7339 14.7935 15.4494 15.5915 15.4494C16.403 15.4494 17.0435 14.7339 17.0435 13.8669C17.042 12.9954 16.403 12.2844 15.5915 12.2844Z\" fill=\"currentColor\"></path>\n<path d=\"M22.517 0.327881H3.42051C3.036 0.328865 2.65545 0.405574 2.30058 0.553629C1.94572 0.701684 1.62349 0.918186 1.35229 1.19077C1.0811 1.46336 0.866253 1.78669 0.720018 2.14231C0.573782 2.49793 0.499023 2.87887 0.50001 3.26338V22.5294C0.50001 24.1539 1.81101 25.4649 3.42051 25.4649H19.58L18.8225 22.8264L20.648 24.5229L22.3715 26.1189L25.4375 28.8279V3.26338C25.4385 2.87887 25.3637 2.49793 25.2175 2.14231C25.0713 1.78669 24.8564 1.46336 24.5852 1.19077C24.314 0.918186 23.9918 0.701684 23.6369 0.553629C23.2821 0.405574 22.9015 0.328865 22.517 0.327881ZM17.015 18.9384C17.015 18.9384 16.502 18.3264 16.076 17.7819C17.942 17.2539 18.6545 16.0869 18.6545 16.0869C18.0695 16.4709 17.5145 16.7439 17.015 16.9299C15.1965 17.6909 13.194 17.8986 11.258 17.5269C10.5427 17.3864 9.84173 17.1805 9.16401 16.9119C8.80658 16.7761 8.45922 16.6152 8.12451 16.4304C8.08101 16.3989 8.03901 16.3869 7.99701 16.3584C7.97454 16.3477 7.9546 16.3324 7.93851 16.3134C7.68201 16.1724 7.53951 16.0734 7.53951 16.0734C7.53951 16.0734 8.22351 17.2134 10.034 17.7549C9.60651 18.2949 9.07851 18.9384 9.07851 18.9384C5.93001 18.8379 4.73451 16.7724 4.73451 16.7724C4.73451 12.1839 6.78651 8.46538 6.78651 8.46538C8.83851 6.92488 10.79 6.96838 10.79 6.96838L10.9325 7.13938C8.36751 7.88188 7.18401 9.00688 7.18401 9.00688C7.18401 9.00688 7.49901 8.83588 8.02551 8.59438C9.54951 7.92538 10.76 7.73938 11.2595 7.69588C11.345 7.68238 11.417 7.66738 11.5025 7.66738C13.9733 7.33441 16.4857 7.80398 18.6695 9.00688C18.6695 9.00688 17.543 7.93888 15.1205 7.19788L15.32 6.96988C15.32 6.96988 17.273 6.92638 19.3235 8.46688C19.3235 8.46688 21.3755 12.1854 21.3755 16.7739C21.3755 16.7739 20.165 18.8379 17.015 18.9384Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
<Link
aria-label={"Facebook"}
className={`w-link czdbake csru8nn c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p c1xty5yn c1g1x4wk cl60rel c1ib9cr2 cnsdrup`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M26 0.327881H2C1.60218 0.327881 1.22064 0.485916 0.93934 0.767221C0.658035 1.04853 0.5 1.43006 0.5 1.82788V25.8279C0.5 26.2257 0.658035 26.6072 0.93934 26.8885C1.22064 27.1698 1.60218 27.3279 2 27.3279H14.9225V16.8879H11.4155V12.8004H14.9225V9.80038C14.9225 6.31288 17.0525 4.41238 20.1725 4.41238C21.221 4.40938 22.271 4.46338 23.315 4.57288V8.20288H21.1625C19.4705 8.20288 19.1405 9.00988 19.1405 10.1904V12.7929H23.186L22.661 16.8804H19.139V27.3279H26C26.3978 27.3279 26.7794 27.1698 27.0607 26.8885C27.342 26.6072 27.5 26.2257 27.5 25.8279V1.82788C27.5 1.43006 27.342 1.04853 27.0607 0.767221C26.7794 0.485916 26.3978 0.327881 26 0.327881Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
<Link
aria-label={"instagram"}
className={`w-link czdbake csru8nn c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p c1xty5yn c1g1x4wk cl60rel c1ib9cr2 cnsdrup`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.9986 6.89345C12.159 6.89345 10.3948 7.6242 9.09406 8.92496C7.79331 10.2257 7.06255 11.9899 7.06255 13.8294C7.06255 15.669 7.79331 17.4332 9.09406 18.7339C10.3948 20.0347 12.159 20.7654 13.9986 20.7654C15.8381 20.7654 17.6023 20.0347 18.903 18.7339C20.2038 17.4332 20.9346 15.669 20.9346 13.8294C20.9346 11.9899 20.2038 10.2257 18.903 8.92496C17.6023 7.6242 15.8381 6.89345 13.9986 6.89345ZM13.9986 18.3339C12.8035 18.3339 11.6574 17.8592 10.8123 17.0142C9.96729 16.1691 9.49255 15.023 9.49255 13.8279C9.49255 12.6329 9.96729 11.4868 10.8123 10.6417C11.6574 9.79669 12.8035 9.32195 13.9986 9.32195C15.1936 9.32195 16.3397 9.79669 17.1848 10.6417C18.0298 11.4868 18.5046 12.6329 18.5046 13.8279C18.5046 15.023 18.0298 16.1691 17.1848 17.0142C16.3397 17.8592 15.1936 18.3339 13.9986 18.3339Z\" fill=\"currentColor\"></path>\n<path d=\"M21.2091 8.25545C22.1021 8.25545 22.8261 7.53149 22.8261 6.63845C22.8261 5.7454 22.1021 5.02145 21.2091 5.02145C20.316 5.02145 19.5921 5.7454 19.5921 6.63845C19.5921 7.53149 20.316 8.25545 21.2091 8.25545Z\" fill=\"currentColor\"></path>\n<path d=\"M26.7996 4.99445C26.4523 4.09772 25.9216 3.28337 25.2416 2.60354C24.5615 1.9237 23.7469 1.39336 22.8501 1.04645C21.8006 0.652485 20.6918 0.439461 19.5711 0.416449C18.1266 0.353449 17.6691 0.335449 14.0061 0.335449C10.3431 0.335449 9.87355 0.335449 8.44105 0.416449C7.32114 0.438284 6.21319 0.651351 5.16505 1.04645C4.26796 1.39295 3.4532 1.92315 2.77305 2.60304C2.09291 3.28293 1.56239 4.09749 1.21555 4.99445C0.821509 6.04387 0.608974 7.1527 0.587052 8.27345C0.522552 9.71645 0.503052 10.1739 0.503052 13.8385C0.503052 17.5014 0.503052 17.968 0.587052 19.4035C0.609552 20.5254 0.821052 21.6325 1.21555 22.684C1.56337 23.5806 2.0944 24.3948 2.77471 25.0746C3.45502 25.7544 4.26965 26.2848 5.16655 26.6319C6.2127 27.0417 7.32111 27.27 8.44405 27.3069C9.88855 27.3699 10.3461 27.3895 14.0091 27.3895C17.6721 27.3895 18.1416 27.3895 19.5741 27.3069C20.6947 27.2842 21.8034 27.0717 22.8531 26.6785C23.7497 26.3307 24.564 25.7999 25.244 25.1199C25.924 24.4399 26.4548 23.6256 26.8026 22.729C27.1971 21.679 27.4086 20.572 27.4311 19.45C27.4956 18.007 27.5151 17.5494 27.5151 13.885C27.5151 10.2204 27.5151 9.75545 27.4311 8.31995C27.4136 7.18336 27.2 6.05832 26.7996 4.99445ZM24.9726 19.2924C24.9629 20.1569 24.8051 21.0133 24.5061 21.8244C24.2808 22.4078 23.9359 22.9375 23.4937 23.3795C23.0514 23.8215 22.5215 24.166 21.9381 24.3909C21.1359 24.6886 20.2886 24.8464 19.4331 24.8575C18.0081 24.9235 17.6061 24.94 13.9521 24.94C10.2951 24.94 9.92155 24.94 8.46955 24.8575C7.61444 24.847 6.76754 24.6892 5.96605 24.3909C5.38058 24.1674 4.84855 23.8235 4.40439 23.3814C3.96022 22.9393 3.6138 22.4089 3.38755 21.8244C3.09272 21.022 2.93502 20.1757 2.92105 19.3209C2.85655 17.896 2.84155 17.494 2.84155 13.84C2.84155 10.1845 2.84155 9.81095 2.92105 8.35745C2.93075 7.49348 3.08853 6.63758 3.38755 5.82695C3.84505 4.64345 4.78255 3.71195 5.96605 3.25895C6.76794 2.96216 7.61459 2.80439 8.46955 2.79245C9.89605 2.72795 10.2966 2.70995 13.9521 2.70995C17.6076 2.70995 17.9826 2.70995 19.4331 2.79245C20.2887 2.80274 21.1361 2.96056 21.9381 3.25895C22.5214 3.48436 23.0513 3.82925 23.4935 4.27149C23.9358 4.71374 24.2806 5.24356 24.5061 5.82695C24.8009 6.62937 24.9586 7.47569 24.9726 8.33045C25.0371 9.75695 25.0536 10.1574 25.0536 13.813C25.0536 17.4669 25.0536 17.86 24.9891 19.294H24.9726V19.2924Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
<Link
aria-label={"dribble"}
className={`w-link czdbake csru8nn c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p c1xty5yn c1g1x4wk cl60rel c1ib9cr2 cnsdrup`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 30 31\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M27.99 8.29788C26.6811 6.02947 24.7973 4.1462 22.5285 2.83788C20.229 1.49838 17.7195 0.827881 15 0.827881C12.2805 0.827881 9.771 1.49838 7.47 2.83788C5.1705 4.17738 3.3495 5.99838 2.01 8.29788C0.6705 10.5974 0 13.1084 0 15.8279C0 18.5474 0.669 21.0584 2.01 23.3579C3.31848 25.6266 5.20238 27.51 7.4715 28.8179C9.771 30.1574 12.2805 30.8279 15 30.8279C17.7195 30.8279 20.229 30.1574 22.53 28.8179C24.7988 27.5096 26.6826 25.6263 27.9915 23.3579C29.331 21.0584 30 18.5474 30 15.8279C30 13.1084 29.331 10.5974 27.99 8.29788ZM15 3.31788C18 3.31788 20.658 4.27788 22.98 6.19638C21.6 7.95738 19.551 9.40638 16.83 10.5464C15.327 7.82688 13.698 5.55588 11.9385 3.73638C12.9357 3.46065 13.9654 3.3199 15 3.31788ZM5.265 8.02788C6.36186 6.63502 7.7497 5.49854 9.3315 4.69788C11.1495 6.49938 12.819 8.74788 14.3415 11.4479C11.3415 12.3479 8.1705 12.7979 4.83 12.7979C3.9705 12.7979 3.321 12.7784 2.88 12.7379C3.33971 11.0195 4.15192 9.41547 5.265 8.02788ZM2.49 15.8279C2.49 15.7469 2.4945 15.6479 2.505 15.5279C2.5155 15.4079 2.52 15.3089 2.52 15.2279C2.901 15.2489 3.4815 15.2579 4.2615 15.2579C8.2605 15.2579 11.9805 14.7074 15.42 13.6079C15.7005 14.1674 15.9915 14.7974 16.29 15.4979C14.31 15.9374 12.279 17.0069 10.1985 18.7079C8.118 20.4089 6.6 22.1984 5.64 24.0779C3.54 21.6974 2.49 18.9479 2.49 15.8279ZM15 28.3379C12.159 28.3379 9.609 27.4574 7.3485 25.6994C8.25 23.9189 9.6345 22.2164 11.505 20.5979C13.374 18.9779 15.2295 17.9684 17.07 17.5679C18.231 20.7764 19.0162 24.1086 19.41 27.4979C18.0043 28.0472 16.5092 28.332 15 28.3379ZM25.62 22.3979C24.6382 23.9797 23.3161 25.3228 21.75 26.3294C21.39 23.2094 20.7 20.1689 19.6815 17.2079C21.0795 17.1089 22.329 17.0579 23.4315 17.0579C24.63 17.0579 25.9605 17.1089 27.42 17.2079C27.2242 19.0526 26.6084 20.828 25.62 22.3979ZM23.76 14.8979C22.02 14.8979 20.4105 14.9684 18.93 15.1079C18.6164 14.2871 18.2762 13.4766 17.91 12.6779C21.009 11.3189 23.208 9.66888 24.5085 7.72788C26.3085 9.84888 27.2895 12.2684 27.4485 14.9879C26.2305 14.9279 25.0005 14.8979 23.76 14.8979Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
<Link
aria-label={"behance"}
className={`w-link czdbake csru8nn c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p c1xty5yn c1g1x4wk cl60rel c1ib9cr2 cnsdrup`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 31 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.7045 0.424316C9.588 0.424316 10.383 0.500817 11.112 0.656817C11.8365 0.811317 12.4545 1.06632 12.9765 1.41882C13.491 1.77132 13.893 2.23932 14.1825 2.82732C14.463 3.40782 14.6025 4.13382 14.6025 4.99182C14.6025 5.92182 14.3925 6.69882 13.971 7.31832C13.5465 7.93932 12.921 8.44782 12.087 8.84082C13.2225 9.16932 14.064 9.74382 14.622 10.5598C15.183 11.3833 15.4575 12.3688 15.4575 13.5238C15.4575 14.4613 15.279 15.2668 14.9205 15.9433C14.575 16.6097 14.0738 17.183 13.4595 17.6143C12.8232 18.0574 12.1124 18.3826 11.361 18.5743C10.5732 18.7811 9.76197 18.885 8.9475 18.8833H0V0.424316H8.7045ZM8.178 7.88232C8.898 7.88232 9.495 7.71132 9.966 7.36482C10.434 7.02282 10.6605 6.45882 10.6605 5.68632C10.6605 5.25732 10.584 4.90332 10.434 4.62582C10.2879 4.35885 10.0716 4.13686 9.8085 3.98382C9.53315 3.82051 9.22925 3.71106 8.913 3.66132C8.56829 3.59703 8.21814 3.56638 7.8675 3.56982H4.065V7.88232H8.178ZM8.4045 15.7408C8.805 15.7408 9.186 15.7063 9.5445 15.6253C9.906 15.5473 10.227 15.4213 10.5 15.2338C10.773 15.0538 10.998 14.8093 11.16 14.4973C11.3235 14.1883 11.403 13.7848 11.403 13.3003C11.403 12.3493 11.1345 11.6728 10.6035 11.2633C10.071 10.8583 9.357 10.6573 8.4825 10.6573H4.065V15.7423H8.4045V15.7408ZM21.252 15.6793C21.8025 16.2163 22.596 16.4863 23.628 16.4863C24.3675 16.4863 25.0065 16.2988 25.545 15.9268C26.076 15.5533 26.4 15.1543 26.5245 14.7418H29.757C29.238 16.3498 28.4505 17.4988 27.3735 18.1903C26.31 18.8848 25.0155 19.2298 23.5035 19.2298C22.4505 19.2298 21.5025 19.0603 20.6535 18.7243C19.8386 18.407 19.1022 17.9167 18.495 17.2873C17.8978 16.6433 17.4362 15.8858 17.1375 15.0598C16.8092 14.1465 16.6466 13.1818 16.6575 12.2113C16.6575 11.2123 16.824 10.2778 17.151 9.41532C17.4614 8.58159 17.9381 7.81966 18.552 7.17582C19.1595 6.54582 19.8795 6.04932 20.718 5.68482C21.5997 5.31398 22.5485 5.12912 23.505 5.14182C24.636 5.14182 25.6245 5.36082 26.4735 5.80182C27.2968 6.22278 28.0107 6.82984 28.5585 7.57482C29.103 8.31432 29.4915 9.16182 29.733 10.1113C29.9745 11.0593 30.0585 12.0493 29.9895 13.0858H20.343C20.3445 14.1418 20.7 15.1423 21.252 15.6793ZM25.47 8.65782C25.0335 8.17482 24.2955 7.91382 23.3925 7.91382C22.806 7.91382 22.3215 8.01132 21.9315 8.21232C21.5749 8.39243 21.2585 8.64297 21.0015 8.94882C20.7758 9.22649 20.6084 9.5469 20.5095 9.89082C20.423 10.1776 20.3672 10.4727 20.343 10.7713H26.316C26.229 9.83532 25.908 9.14382 25.47 8.65782ZM19.593 1.66332H27.0765V3.48582H19.593V1.66332Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
</Box>
</Box>
<Box
className={`w-box`}>
<Form
state={formState}
onStateChange={(state: any) => {
formState = state
set$formState(formState)
}}
className={`w-webhook-form`}>
{(formState === 'initial' || formState === 'error') &&
<Box
className={`w-box cry9bxc c1lfjoq7 c1s46o9r cdczzub`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1482uel`}>
<Input
placeholder={"Name"}
required={true}
name={"name"}
className={`w-text-input c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c1a8d7ts c1b2tb9q c122t6uk c1xm4ef6 c5t8s5h cl60rel c2zsigv c1qcsrcr cqgzh32 c1vqqg4v`} />
</Box>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1482uel`}>
<Input
placeholder={"Email"}
required={true}
type={"email"}
name={"email"}
className={`w-text-input c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c1a8d7ts c1b2tb9q c122t6uk c1xm4ef6 c5t8s5h cl60rel c2zsigv c1qcsrcr cqgzh32 c1vqqg4v`} />
</Box>
</Box>
<Button
className={`w-button c1uz1hxp cl8m66n c1b2tb9q c1xm4ef6 c1a8d7ts c122t6uk c1gut7ra cvyaqlm c1wn9gbn ckhl5v6 c135vpv5 c1nouzdk c1qom380 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1x4yn0w cqrpgto cl60rel c1ib9cr2 cmpnn5a`}>
{"Submit"}
</Button>
</Box>
}
{(formState === 'success') &&
<Box
className={`w-box`}>
{"Thank you for getting in touch!"}
</Box>
}
{(formState === 'error') &&
<Box
className={`w-box cle73z7`}>
{"Sorry, something went wrong."}
</Box>
}
</Form>
</Box>
</Box>
<Link
href={"/credits"}
className={`w-link czdbake cld4m44 c180fws7 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p c1lyhjp7 cl60rel c1ib9cr2 cnsdrup`}>
{"Credits"}
</Link>
</Box>
</Box>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<script>(function(factory){if(typeof define===\"function\"&&define.amd){define(factory)}else if(typeof module!==\"undefined\"&&module.exports){module.exports=factory()}else{window.enterView=factory.call(this)}})((()=>{const lib=({selector:selector,enter:enter=(()=>{}),exit:exit=(()=>{}),progress:progress=(()=>{}),offset:offset=0,once:once=false})=>{let raf=null;let ticking=false;let elements=[];let height=0;function setupRaf(){raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1e3/60)}}function getOffsetHeight(){if(offset&&typeof offset===\"number\"){const fraction=Math.min(Math.max(0,offset),1);return height-fraction*height}return height}function updateHeight(){const cH=document.documentElement.clientHeight;const wH=window.innerHeight||0;height=Math.max(cH,wH)}function updateScroll(){ticking=false;const targetFromTop=getOffsetHeight();elements=elements.filter((el=>{const{top:top,bottom:bottom,height:height}=el.getBoundingClientRect();const entered=top<targetFromTop;const exited=bottom<targetFromTop;if(entered&&!el.__ev_entered){enter(el);el.__ev_progress=0;progress(el,el.__ev_progress);if(once)return false}else if(!entered&&el.__ev_entered){el.__ev_progress=0;progress(el,el.__ev_progress);exit(el)}if(entered&&!exited){const delta=(targetFromTop-top)/height;el.__ev_progress=Math.min(1,Math.max(0,delta));progress(el,el.__ev_progress)}if(entered&&exited&&el.__ev_progress!==1){el.__ev_progress=1;progress(el,el.__ev_progress)}el.__ev_entered=entered;return true}));if(!elements.length){window.removeEventListener(\"scroll\",onScroll,true);window.removeEventListener(\"resize\",onResize,true);window.removeEventListener(\"load\",onLoad,true)}}function onScroll(){if(!ticking){ticking=true;raf(updateScroll)}}function onResize(){updateHeight();updateScroll()}function onLoad(){updateHeight();updateScroll()}function selectionToArray(selection){const len=selection.length;const result=[];for(let i=0;i<len;i+=1){result.push(selection[i])}return result}function selectAll(selector,parent=document){if(typeof selector===\"string\"){return selectionToArray(parent.querySelectorAll(selector))}else if(selector instanceof NodeList){return selectionToArray(selector)}else if(selector instanceof Array){return selector}}function setupElements(){elements=selectAll(selector)}function setupEvents(){window.addEventListener(\"resize\",onResize,true);window.addEventListener(\"scroll\",onScroll,true);window.addEventListener(\"load\",onLoad,true);onResize()}function init(){if(!selector){console.error(\"must pass selector\");return false}setupElements();if(!elements||!elements.length){console.error(\"no els found\");return false}setupRaf();setupEvents();updateScroll()}init()};return lib}));</script>"}
executeScriptOnCanvas={true}
clientOnly={true}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>\n:root {\n  --ani-duration: var(--duration-default, .2s);\n  --ani-delay: 0s;\n  --ani-slide-offset: 20%;\n  --ani-zoom-in-scale: 1;\n  --ani-zoom-out-scale: .85;\n  --ani-flip-rotate: 30deg;\n  --ani-easing: var(--easing-default, ease);\n  --ani-fill-mode: forwards;\n}\n[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}\n@keyframes fadeIn{from{opacity:0}\nto{opacity:1}}\n@keyframes fadeOut{from{opacity:1}\nto{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}\n@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}\nto{opacity:1;translate:none}}\n@keyframes slideOut{from{opacity:1;translate:none}\nto{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}\n@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}\nto{opacity:1;scale:1}}\n@keyframes zoomOut{from{opacity:1;scale:1}\nto{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}\n@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}\nto{rotate:y 0;opacity:1}}\n@keyframes flipOutY{from{rotate:y 0;opacity:1}\nto{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}\n@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}\nto{rotate:x 0;opacity:1}}\n@keyframes flipOutX{from{rotate:x 0;opacity:1}\nto{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}\n@keyframes expandDown{from{height:0}\nto{height:var(--newHeight)}}\n@keyframes expandUp{from{height:var(--newHeight)}\nto{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}\n@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script type=\"module\">\nconst config = {\n\tintersectionOffset: 0.2,\n\tintersectionOnce: true,\n\tprogressOffset: 0,\n\tprogressOnce: false,\n};\nfunction e({trigger:e,selector:r,offset:n,once:s}){const a=\"progress\"===e;return enterView({selector:r,enter:e=>!a&&t(e,\"in\",\"out\"),exit:e=>!a&&t(e,\"out\",\"in\"),progress:(e,t)=>a&&function(e,t){e.style.opacity=t,e.style.transform=function(e,t){const r=e.parentElement,n=r&&r.hasAttribute(\"data-ani-progress\")?r.getAttribute(\"data-ani-progress\"):e.getAttribute(\"data-ani-progress\"),s=parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-slide-offset\"))||0,a=parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-flip-rotate\"))||0,o=1-(1-t)*(1-parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-zoom-out-scale\"))||1);switch(n){case\"slide-up\":return`translateY(${(1-t)*s}px)`;case\"slide-down\":return`translateY(-${(1-t)*s}px)`;case\"slide-left\":return`translateX(${(1-t)*s}px)`;case\"slide-right\":return`translateX(-${(1-t)*s}px)`;case\"flip-x\":return`rotateX(${(1-t)*a}deg)`;case\"flip-y\":return`rotateY(${(1-t)*a}deg)`;case\"zoom\":return`scale(${o})`;default:return\"none\"}}(e,t)}(e,t),offset:n,once:s})}function t(e,t,r){e.classList.add(t),e.classList.remove(r)}function r(e,t){const r=`[${e}]${t?'[data-ani-children=\"true\"] > *':':not([data-ani-children=\"true\"])'}`;return Array.from(document.querySelectorAll(r))}const n=[...r(\"data-ani\"),...r(\"data-ani\",!0)],s=[...r(\"data-ani-progress\"),...r(\"data-ani-progress\",!0)];n.length&&e({trigger:\"intersection\",selector:n,offset:config.intersectionOffset,once:config.intersectionOnce}),s.length&&e({trigger:\"progress\",selector:s,offset:config.progressOffset,once:config.progressOnce});\n</script>"}
executeScriptOnCanvas={true}
clientOnly={true}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    