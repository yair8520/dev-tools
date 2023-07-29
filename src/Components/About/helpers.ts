import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NextWeekIcon from '@mui/icons-material/NextWeek';

export const socialLinks = [
  {
    icon: GitHubIcon,
    href: 'https://github.com/yair8520',
    color: 'inherit',
  },
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/yair-gabay-aba1b8207/',
    color: '#0966c2',
  },
  {
    desc: 'Protfolio',
    icon: NextWeekIcon,
    href: 'https://yair8520.github.io/MyPortfolio/',
    color: 'inherit',
  },
];
const recipient = 'yair.gabay11@gmail.com';
const subject = 'dev-tools Bug Report';

export const mailtoHref = `mailto:${recipient}?subject=${encodeURIComponent(
  subject
)}`;

export const handleShareButton = (divId = "") => {
  if (divId)
    divId = `/${divId}`
  if (navigator.share) {
    navigator
      .share({
        title: 'Dev-Tools',
        text: `Check out this site`,
        url: document.location.href + divId,
      })
      .then(() => {
        console.log('Successfully shared');
      })
      .catch((error) => {
        console.error('Something went wrong sharing the blog', error);
      });
  }
};
