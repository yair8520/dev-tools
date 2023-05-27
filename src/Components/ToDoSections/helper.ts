import TodayIcon from '@mui/icons-material/Today';
import FavoriteIcon from '@mui/icons-material/Favorite';
export const defualtFolders = [
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