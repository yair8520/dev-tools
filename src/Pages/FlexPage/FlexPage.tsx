import React, { useContext, useState } from 'react';
import { FlexDemo } from '../../Components/FlexDemo';
import { FlexOptions } from '../../Components/FlexOptions';
import styles from './FlexPage.module.css';
import {
  IContainerStyle,
  InitialStyle,
  ItemsStyle,
  flexItemsInitial,
} from './FlexPageProps';
import { Mutable } from '../../Constant/DropDown';
import { AppContext } from '../../Context/ThemeContext/ThemeContext';
import { Axis } from '../../Components/Axis';
import { ExpandCodeSection } from '../../Components/ExpandCodeSection';
import { Text } from '../../Components';
import { createObjectString } from '../../Helpers/Json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FlexPage = () => {
  const { isDark } = useContext(AppContext);
  const [items, setItems] = useState<Mutable<ItemsStyle>[]>(flexItemsInitial);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [containerStyle, setContainerStyle] =
    useState<Mutable<IContainerStyle>>(InitialStyle);
  const [expandedFirst, setExpandedFirst] = useState(false);
  const [expandedSecond, setExpandedSecond] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <div
          className={styles.rowItem}
          onClick={() => setExpandedFirst(!expandedFirst)}
        >
          <Text variant="body2" style={{ marginRight: '5px' }}>
            Container Style
          </Text>
          <ExpandMoreIcon
            style={{ transform: expandedFirst ? 'rotate(180deg)' : '' }}
          />
        </div>
        <ExpandCodeSection
          expanded={expandedFirst}
          item={{
            code: createObjectString(containerStyle, 'container'),
          }}
        />

        <div
          className={styles.rowItem}
          onClick={() => setExpandedSecond(!expandedSecond)}
        >
          <Text variant="body2" style={{ marginRight: '5px' }}>
            Children Style
          </Text>
          <ExpandMoreIcon
            style={{ transform: expandedSecond ? 'rotate(180deg)' : '' }}
          />
        </div>
        <ExpandCodeSection
          expanded={expandedSecond}
          item={{
            code: createObjectString(
              items[selectedIndex],
              `container > :nth-child(${selectedIndex + 1})`
            ),
          }}
        />
        <FlexOptions
          items={items}
          setItems={setItems}
          selectedIndex={selectedIndex}
          containerStyle={containerStyle}
          setContainerStyle={setContainerStyle}
        />
      </div>
      <div
        style={{
          ...containerStyle,
          backgroundColor: !isDark ? '#f3f4f6' : '#333',
        }}
        className={styles.demo}
      >
        <Axis dir={containerStyle.flexDirection} />
        <FlexDemo
          items={items}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
    </div>
  );
};
export default FlexPage;
