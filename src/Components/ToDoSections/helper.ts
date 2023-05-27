import TodayIcon from '@mui/icons-material/Today';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SubjectIcon from '@mui/icons-material/Subject';
export const defualtFolders = [
    {
        title: "All",
        icon: SubjectIcon,
        filterBy: (a: any) => true
    },
    {
        title: "today`s tasks",
        icon: TodayIcon,
        filterBy: (a: any) => a.date === new Date()
    },
    {
        title: "Favorites",
        icon: FavoriteIcon,
        filterBy: (a: any) => a.favorite === true
    }
]