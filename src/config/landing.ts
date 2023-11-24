import { Icon, Icons } from "@/components/Icons"
import { LucideIcon, LucideProps } from "lucide-react"

const landingConfig = {
  title: "I’m freelance product designer based in Vancourver.",
  socialMedias: [
    {
      Icon: Icons.twitter,
      url: "https://twitter.com/ClongLam",
      label: "Twitter",
    },
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
  ],

  navLinks: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/about" },
  ],
  email: "hello@hugo-coding.com",
}

export default landingConfig
