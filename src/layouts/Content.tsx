import { Section } from ".";
import { Article } from "../components";
import editorDesktopImg from "../assets/illustration-editor-desktop.svg";
import editorMobileImg from "../assets/illustration-editor-mobile.svg";
import phonesImg from "../assets/illustration-phones.svg";
import laptopDesktopImg from "../assets/illustration-laptop-desktop.svg";
import laptopMobileImg from "../assets/illustration-laptop-mobile.svg";

import classes from "./Content.module.scss";
function Content() {
  return (
    <main className={classes.content}>
      <h2 className={classes["content__heading"]}>Designed for the future</h2>
      <Section id={classes["section-1"]}>
        <div className={classes["section-1__img-wrapper"]}>
          <picture>
            <source srcSet={editorDesktopImg} media="(min-width: 75em)" />
            <source srcSet={editorMobileImg} />
            <img src={editorDesktopImg} alt="editor illustration" />
          </picture>
        </div>
        <Article className={classes["section-1__article-1"]}>
          <Article.Title>Introducing an extensible editor</Article.Title>
          <Article.Paragraph>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </Article.Paragraph>
        </Article>
        <Article className={classes["section-1__article-2"]}>
          <Article.Title>Robust content management</Article.Title>
          <Article.Paragraph>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </Article.Paragraph>
        </Article>
      </Section>

      <Section id={classes["section-2"]}>
        <div className={classes["section-2__img-wrapper"]}>
          <img src={phonesImg} alt="phones illustration" />
        </div>
        <Article className={classes["section-2__article-1"]}>
          <Article.Title varient={["light", "large"]}>
            State of the Art Infrastructure
          </Article.Title>
          <Article.Paragraph varient="light">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </Article.Paragraph>
        </Article>
      </Section>

      <Section id={classes["section-3"]}>
        <div className={classes["section-3__img-wrapper"]}>
          <picture>
            <source srcSet={laptopDesktopImg} media="(min-width: 75em)" />
            <source srcSet={laptopMobileImg} />
            <img src={laptopDesktopImg} alt="laptop illustration" />
          </picture>
        </div>
        <Article className={classes["section-3__article-1"]}>
          <Article.Title>Free, open, simple</Article.Title>
          <Article.Paragraph>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </Article.Paragraph>
        </Article>
        <Article className={classes["section-3__article-2"]}>
          <Article.Title>Powerful tooling</Article.Title>
          <Article.Paragraph>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </Article.Paragraph>
        </Article>
      </Section>
    </main>
  );
}

export default Content;
