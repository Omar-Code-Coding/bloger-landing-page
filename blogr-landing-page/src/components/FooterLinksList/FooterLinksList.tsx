import { FooterLinks } from "..";
import { randKey } from "../../utils";

interface FooterLinksListProps {
  linkItems: { [key: string]: string[] };
}

function FooterLinksList({ linkItems }: FooterLinksListProps) {
  return (
    <>
      {Object.entries(linkItems).map(([mainLabel, labels]) => (
        <FooterLinks key={randKey()} mainLabel={mainLabel} labels={labels} />
      ))}
    </>
  );
}

export default FooterLinksList;
