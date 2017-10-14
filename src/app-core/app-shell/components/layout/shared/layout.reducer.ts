import * as layout from './layout.action';


export interface State {
  layout: string;
  sidenavOpen: boolean;
  sidenavCollapsed: boolean;
  sidenavAlign: string;
  sidenavMode: string;
  sidenavDisableClose: boolean;
  quickpanelOpen: boolean;
  layoutBoxed: boolean;
  settingsOpen: boolean;
  cardElevation: string;
}

const initialState: State = {
  layout: 'default',
  sidenavOpen: false,
  sidenavCollapsed: false,
  sidenavMode: 'over',
  sidenavDisableClose: true,
  layoutBoxed: false,
  sidenavAlign: 'start',
  quickpanelOpen: false,
  settingsOpen: false,
  cardElevation: 'card-elevation-z4'
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {

    case layout.OPEN_SIDENAV: {
      return Object.assign({}, state, {
        sidenavOpen: true
      });
    }

    case layout.CLOSE_SIDENAV: {
      return Object.assign({}, state, {
        sidenavOpen: false
      });
    }

    case layout.TOGGLE_SIDENAV: {
      return Object.assign({}, state, {
        sidenavOpen: !state.sidenavOpen
      });
    }

    case layout.ENABLE_SIDENAV_COLLAPSE: {
      return Object.assign({}, state, {
        sidenavCollapsed: true
      });
    }

    case layout.DISABLE_SIDENAV_COLLAPSE: {
      return Object.assign({}, state, {
        sidenavCollapsed: false
      });
    }

    case layout.TOGGLE_SIDENAV_COLLAPSE: {
      return Object.assign({}, state, {
        sidenavCollapsed: !state.sidenavCollapsed
      });
    }

    case layout.SET_SIDENAV_ALIGN: {
      const mode = action.payload;

      return Object.assign({}, state, {
        sidenavAlign: mode
      });
    }

    case layout.SET_SIDENAV_MODE: {
      const mode = action.payload;

      return Object.assign({}, state, {
        sidenavMode: mode
      });
    }

    case layout.SET_SIDENAV_DISABLE_CLOSE: {
      const mode = action.payload;

      return Object.assign({}, state, {
        sidenavDisableClose: mode
      });
    }

    case layout.OPEN_QUICKPANEL: {
      return Object.assign({}, state, {
        quickpanelOpen: true
      });
    }

    case layout.CLOSE_QUICKPANEL: {
      return Object.assign({}, state, {
        quickpanelOpen: false
      });
    }

    case layout.TOGGLE_QUICKPANEL: {
      return Object.assign({}, state, {
        quickpanelOpen: !state.quickpanelOpen
      });
    }

    case layout.SELECT_LAYOUT: {
      const Layout = action.payload;

      switch (Layout) {
        case 'alpha': {
          return Object.assign({}, state, {
            layout: Layout,
            sidenavOpen: true,
            sidenavCollapsed: true,
            sidenavMode: 'side',
            sidenavDisableClose: true,
            layoutBoxed: false
          });
        }

        case 'beta': {
          return Object.assign({}, state, {
            layout: layout,
            sidenavOpen: true,
            sidenavCollapsed: false,
            sidenavMode: 'side',
            sidenavDisableClose: true,
            layoutBoxed: false
          });
        }

        case 'gamma': {
          return Object.assign({}, state, {
            layout: layout,
            sidenavOpen: false,
            sidenavCollapsed: false,
            sidenavMode: 'over',
            sidenavDisableClose: false,
            layoutBoxed: true
          });
        }

        default: {
          return Object.assign({}, state, {
            layout: layout
          });
        }
      }


    }

    case layout.ENABLE_LAYOUT_BOXED: {
      return Object.assign({}, state, {
        layoutBoxed: true
      });
    }

    case layout.DISABLE_LAYOUT_BOXED: {
      return Object.assign({}, state, {
        layoutBoxed: false
      });
    }

    case layout.TOGGLE_LAYOUT_BOXED: {
      return Object.assign({}, state, {
        layoutBoxed: !state.layoutBoxed
      });
    }

    case layout.OPEN_SETTINGS: {
      return Object.assign({}, state, {
        settingsOpen: true
      });
    }

    case layout.CLOSE_SETTINGS: {
      return Object.assign({}, state, {
        settingsOpen: false
      });
    }

    case layout.TOGGLE_SETTINGS: {
      return Object.assign({}, state, {
        settingsOpen: !state.settingsOpen
      });
    }

    case layout.SET_CARD_ELEVATION: {
      const elevation = action.payload;

      return Object.assign({}, state, {
        cardElevation: elevation
      });
    }

    default:
      return state;
  }
}

export const getSidenavOpen = (state: State) => state.sidenavOpen;
export const getSidenavCollapsed = (state: State) => state.sidenavCollapsed;
export const getSidenavAlign = (state: State) => state.sidenavAlign;
export const getSidenavMode = (state: State) => state.sidenavMode;
export const getSidenavDisableClose = (state: State) => state.sidenavDisableClose;
export const getQuickpanelOpen = (state: State) => state.quickpanelOpen;
export const getLayout = (state: State) => state.layout;
export const getLayoutBoxed = (state: State) => state.layoutBoxed;
export const getSettingsOpen = (state: State) => state.settingsOpen;
export const getCardElevation = (state: State) => state.cardElevation;

