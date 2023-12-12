import { Icon, Icons } from "@/components/Icons"
import { LucideIcon, LucideProps } from "lucide-react"

const landingConfig = {
  title: "I’m freelance product designer based in Vancourver.",
  socialMedias: [
    {
      Icon: Icons.gitHub as LucideIcon,
      url: "https://github.com/clonglam",
      label: "Github",
    },
    {
      Icon: Icons.linkedin,
      url: "https://www.linkedin.com/in/hugo-lam/",
      label: "Linkedin",
    },
    {
      Icon: Icons.twitter,
      url: "https://twitter.com/ClongLam",
      label: "Twitter",
    },
  ],

  navLinks: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "https://medium.com/@hugolam516", external: true },
  ],
  email: "hello@hugo-coding.com",
}

export default landingConfig
