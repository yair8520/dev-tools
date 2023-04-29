import React, { useContext } from 'react';
import styles from './HookListItem.module.css';
import { HookListItemProps } from './HookListItemProps';
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  styled,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WebIcon from '@mui/icons-material/Web';
import StayPrimaryPortraitIcon from '@mui/icons-material/StayPrimaryPortrait';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
import { AppContext } from '../../ThemeContext/ThemeContext';
import { CIconButton } from '../../CIconButton';
import { Text } from '../../Text';
import { createReactTypeScriptSandbox } from '../../../Helpers/SandBox';

export const HookListItem = ({ item }: HookListItemProps) => {
  const { isDark } = useContext(AppContext);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const ExpandMore = styled((props: any) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  return (
    <div className={styles.container}>
      <Card sx={{ width: '100%' }}>
        <CardActions disableSpacing>
          <CardHeader
            onClick={handleExpandClick}
            disableTypography
            title={
              <Text variant="h6" bold>
                {item.title}
              </Text>
            }
            sx={{ flexGrow: 1, textAlign: 'left' }}
          />
          {item.launch && (
            <CIconButton
              onClick={() => createReactTypeScriptSandbox(item.code)}
              title={'Try'}
            >
              <LaunchIcon />
            </CIconButton>
          )}
          {item.native ? (
            <CIconButton title={'Mobile'}>
              <StayPrimaryPortraitIcon />
            </CIconButton>
          ) : (
            <CIconButton title={'Web'}>
              <WebIcon />
            </CIconButton>
          )}
          <ExpandMore
            onClick={handleExpandClick}
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <CardContent>
            <Typography paragraph>{item.desc}</Typography>
            <div>
              {/* <div className={styles.copyIcon}>
                {expanded && (
                  <CIconButton title={'Copy'}>
                    <ContentCopyIcon />
                  </CIconButton>
                )}
              </div> */}
              <SyntaxHighlighter
                style={isDark ? dracula : undefined}
                showLineNumbers={true}
                language="javascript"
              >
                {item.code}
              </SyntaxHighlighter>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
