import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-to-post-build',
  templateUrl: './pre-to-post-build.component.html',
  styleUrls: ['./pre-to-post-build.component.scss']
})
export class PreToPostBuildComponent implements OnInit {
  constructor() {}

  uiConfig = {
    _id: { $oid: '62ab0a02ee7bbd1c91df5293' },
    userEmailId: 'himanshu.goel@soprabanking.com',
    applicationName: 'Sample Application',
    preBuildUiConfig: {
      'sample-app': {
        languages: {
          'en.json': {
            config: [
              { from: '%%applicationTitle%%', to: 'Sample Application' },
              { from: '%%theme%%', to: 'xms-theme' },
              { from: '%%language%%', to: 'ui-config/sample-app/en' },
              { from: '%%fileLanguage%%', to: 'en' },
              { from: '%%invalidEmailAddress%%', to: 'Please enter a valid email address' },
              { from: '%%invalidDate%%', to: 'Invalid date' },
              { from: '%%defaultErrorMessage%%', to: 'Oops, something went wrong!' },
              {
                from: '%%invalidFormatErrorMessage%%',
                to: 'Please enter a valid amount with maximum {decimalNumber} decimal places'
              },
              { from: '%%idleDialogTitle%%', to: 'Session timeout' },
              {
                from: '%%idleDialogSubTitle%%',
                to: 'Your session is about to expire. You will be logged out in #autoLogoutGracePeriodCountdown seconds'
              },
              { from: '%%idleDialogPrimaryActionText%%', to: 'Continue' },
              { from: '%%idleDialogSecondaryActionText%%', to: 'Log out' },
              { from: '%%authDialogTitle%%', to: 'Session expired' },
              {
                from: '%%authDialogSubTitle%%',
                to: 'You have been directed to the logout page.'
              },
              { from: '%%idleDialogActionText%%', to: 'Ok' },
              { from: '%%invalidDateErrorMessage%%', to: 'Invalid date' },
              { from: '%%invalidAutoCompleteEntry%%', to: 'Invalid entry' },
              { from: '%%requiredErrorMessage%%', to: 'Field is required' },
              {
                from: '%%minErrorMessage%%',
                to: 'Minimum value of {min} needed. Actual {actual}'
              },
              {
                from: '%%maxErrorMessage%%',
                to: 'Maximum value of {max} exceeded. Actual {actual}'
              },
              {
                from: '%%fileUploadErrorMessage%%',
                to: 'The selected file is {actual}MB. This exceeds the file size limit of {max}MB.'
              },
              { from: '%%fileTypeErrorMessage%%', to: 'Your file format is not supported' },
              {
                from: '%%minLengthErrorMessage%%',
                to: 'Minimum length of {requiredLength} needed. Actual {actualLength}'
              },
              {
                from: '%%maxLengthErrorMessage%%',
                to: 'Maximum length of {requiredLength} exceeded. Actual {actualLength}'
              },
              { from: '%%patternErrorMessage%%', to: 'Invalid format' },
              { from: '%%errorMessage%%', to: 'Error has occurred' },
              { from: '%%invalidEmailErrorMessage%%', to: 'Please enter a valid email address' },
              {
                from: '%%maxTimeErrorMessage%%',
                to: 'Please enter a time less than {requiredTime}. Selected time: {actualTime}'
              },
              {
                from: '%%minTimeErrorMessage%%',
                to: 'Please enter a time greater than {requiredTime}. Selected time: {actualTime}'
              },
              { from: '%%inProgressErrorMessage%%', to: 'Please wait while this loads...' },
              { from: '%%progressFailedErrorMessage%%', to: 'Failed to load...' },
              {
                from: '%%unsupportedBrowserErrorMessage%%',
                to: 'This application is not supported on your browser and it may not function correctly.<br><br>Supported browsers are recent versions of <br>- Chrome, <br>- Firefox, <br>- Safari and <br>- Microsoft Edge <br><br><br> If you experience any issues please first upgrade to one of the supported browsers'
              }
            ],
            functionExpression: [{ from: '%%TestString%%', to: 'Test output' }],
            routes: [],
            process1: { routes: [], screens: {} }
          }
        },
        process1: {
          screens: {
            'screen1.json': {
              screen: {
                screenTitle: 'Screen 1',
                screenClasses: [],
                screenLayout: {},
                screenActions: [],
                screenConfig: [
                  {
                    id: 'btn_nextConnectedScreen',
                    name: 'btn_nextConnectedScreen',
                    type: 'button',
                    label: 'Next Screen 2',
                    disabled: false,
                    options: { classes: ['dxp-button-raised'] },
                    validation: [],
                    actions: [
                      {
                        type: 'navigateTo',
                        runOn: ['clicked'],
                        options: { navigationUrl: '"../screen2"', routingParameters: [] }
                      }
                    ]
                  }
                ]
              },
              templates: []
            },
            'screen2.json': {
              screen: {
                screenTitle: 'Screen 2',
                screenClasses: [],
                screenLayout: {},
                screenActions: [],
                screenConfig: [
                  {
                    id: 'btn_nextConnectedScreen',
                    name: 'btn_nextConnectedScreen',
                    type: 'button',
                    label: 'Next Screen 3',
                    disabled: false,
                    options: { classes: ['dxp-button-raised'] },
                    validation: [],
                    actions: [
                      {
                        type: 'navigateTo',
                        runOn: ['clicked'],
                        options: { navigationUrl: '"../screen3"', routingParameters: [] }
                      }
                    ]
                  },
                  {
                    id: 'btn_previousConnectedScreen',
                    name: 'btn_previousConnectedScreen',
                    type: 'button',
                    label: 'Previous Screen',
                    disabled: false,
                    options: {},
                    validation: [],
                    actions: [{ type: 'pageBack', runOn: ['clicked'] }]
                  }
                ]
              },
              templates: []
            },
            'screen3.json': {
              screen: {
                screenTitle: 'Screen 3',
                screenClasses: [],
                screenLayout: {},
                screenActions: [],
                screenConfig: [
                  {
                    id: 'btn_nextConnectedScreen',
                    name: 'btn_nextConnectedScreen',
                    type: 'button',
                    label: 'Next Screen 4',
                    disabled: false,
                    options: { classes: ['dxp-button-raised'] },
                    validation: [],
                    actions: [
                      {
                        type: 'navigateTo',
                        runOn: ['clicked'],
                        options: { navigationUrl: '"../screen4"', routingParameters: [] }
                      }
                    ]
                  },
                  {
                    id: 'btn_previousConnectedScreen',
                    name: 'btn_previousConnectedScreen',
                    type: 'button',
                    label: 'Previous Screen',
                    disabled: false,
                    options: {},
                    validation: [],
                    actions: [{ type: 'pageBack', runOn: ['clicked'] }]
                  }
                ]
              },
              templates: []
            },
            'screen4.json': {
              screen: {
                screenTitle: 'Screen 4',
                screenClasses: [],
                screenLayout: {},
                screenActions: [],
                screenConfig: [
                  {
                    id: 'btn_previousConnectedScreen',
                    name: 'btn_previousConnectedScreen',
                    type: 'button',
                    label: 'Previous Screen',
                    disabled: false,
                    options: {},
                    validation: [],
                    actions: [{ type: 'pageBack', runOn: ['clicked'] }]
                  }
                ]
              },
              templates: []
            }
          },
          'routes.json': {
            routes: [
              { path: '', redirectTo: 'screen1', pathMatch: 'full' },
              {
                path: 'screen1',
                componentName: 'default',
                $includeScreen: 'screens/screen1.json'
              },
              {
                path: 'screen2',
                componentName: 'default',
                $includeScreen: 'screens/screen2.json'
              },
              {
                path: 'screen3',
                componentName: 'default',
                $includeScreen: 'screens/screen3.json'
              },
              {
                path: 'screen4',
                componentName: 'default',
                $includeScreen: 'screens/screen4.json'
              }
            ],
            templates: []
          }
        },
        'app-config-common-services.json': {
          serviceEndpoints: { dummyEndpoint: '<<envEndPoint>>/api/data' },
          formErrorMessages: {
            invalidDate: '%%invalidDate%%',
            invalidCurrency: '%%invalidFormatErrorMessage%%',
            invalidDateErrorMessage: '%%invalidDateErrorMessage%%',
            invalidAutoCompleteEntry: '%%invalidAutoCompleteEntry%%',
            required: '%%requiredErrorMessage%%',
            min: '%%minErrorMessage%%',
            max: '%%maxErrorMessage%%',
            fileUpload: '%%fileUploadErrorMessage%%',
            fileType: '%%fileTypeErrorMessage%%',
            minlength: '%%minLengthErrorMessage%%',
            maxlength: '%%maxLengthErrorMessage%%',
            pattern: '%%patternErrorMessage%%',
            error: '%%errorMessage%%',
            invalidEmail: '%%invalidEmailErrorMessage%%',
            maxTime: '%%maxTimeErrorMessage%%',
            minTime: '%%minTimeErrorMessage%%'
          },
          reCaptchaSettings: {
            siteKey: '6LeZMRoTAAAAACe3B7Z0zXfilUNMTA1bMQACgqq0',
            theme: 'light',
            size: 'normal',
            language: 'en-GB',
            disabled: false
          },
          progressMessages: {
            inProgress: '%%inProgressErrorMessage%%',
            progressFailed: '%%progressFailedErrorMessage%%'
          },
          email: {
            regex:
              "^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$"
          },
          dateOptions: { dateFormat: 'LL', inputType: 'native' },
          locale: 'en-GB',
          currency: 'GBP',
          idleDialog: {
            title: '%%idleDialogTitle%%',
            subTitle: '%%idleDialogSubTitle%%',
            primaryActionText: '%%idleDialogPrimaryActionText%%',
            secondaryActionText: '%%idleDialogSecondaryActionText%%'
          },
          authDialog: {
            title: '%%authDialogTitle%%',
            subTitle: '%%authDialogSubTitle%%',
            actionText: '%%idleDialogActionText%%'
          },
          defaultErrorMessage: '%%defaultErrorMessage%%',
          errorRoute: '',
          idleTime: 10,
          autoLogoutGracePeriod: 1,
          logLevel: 4,
          functionExpressionPath: '%%language%%/function-expression.js',
          supportedBrowsers: [
            { type: 'Chrome', version: 84.05 },
            { type: 'firefox', version: 80 },
            { type: 'Version', version: 13 },
            { type: 'MSIE', version: 11 },
            { type: 'Trident', version: 13 }
          ],
          unsupportedBrowserMessage: '%%unsupportedBrowserErrorMessage%%'
        },
        'app-config.json': {
          title: '%%applicationTitle%%',
          uiSettings: {
            breakPoints: { desktopLG: 1201, desktop: 1024, tablet: 768, mobile: 576 },
            layoutSettings: { options: { gapSize: 'none' } },
            applicationBorder: 16,
            fieldAppearance: 'standard',
            theme: '%%theme%%',
            floatLabel: 'always',
            leftSidebarCollapsed: true,
            rightSidebarCollapsed: true,
            routesPath: '%%language%%',
            iconsPath: 'assets/icons'
          },
          customHeaders: [],
          environmentConfig:
            '/ui-config/sample-app/app-config-common-services-%%fileLanguage%%.json',
          environmentStrings: { '<<envEndPoint>>': 'https://dummy-environment.com' }
        },
        'function-expression.js':
          "\n    /**\n    * Note - These custom javascript functions should only be intended for simple data processing\n    * and should not be used for manipulating a global object or any other async operations.\n    * Support and maintenance of any functions created here are the responsibility of the customer.\n    * Also, these functions only receive immutable objects as input parameters and should be\n    * scoped under xmsFnExpression namespace to avoid polluting of global scope.\n    */\n\n   var xmsFnExpression = {\n       dummy: function () {\n           return '%%TestString%%';\n       }\n   };\n   ",
        'routes.json': {
          routes: [
            {
              path: '',
              componentName: 'fullLayout',
              children: [
                { path: '', redirectTo: 'process1', pathMatch: 'full' },
                { path: 'process1', processFile: 'process1/routes.json' },
                { path: '**', pathMatch: 'full', redirectTo: 'process1' }
              ]
            }
          ],
          templates: []
        }
      }
    },
    postBuildUiConfig: {}
  };

  ngOnInit(): void {
    this.performConversion(this.uiConfig.preBuildUiConfig, this.uiConfig.postBuildUiConfig);
  }

  private performConversion(preBuildConfig: any, postBuildUiConfig: any) {
    postBuildUiConfig = this.buildAppName(preBuildConfig, postBuildUiConfig);
  }

  private buildAppName(preBuildConfig: any, postBuildUiConfig: any) {
    const appName = Object.keys(preBuildConfig)[0];

    postBuildUiConfig[appName] = {};

    const languages = Object.keys(preBuildConfig[appName].languages);

    languages.forEach((lang: any) => {
      console.log(preBuildConfig[appName].languages[lang]);

      const languageConfigData = preBuildConfig[appName].languages[lang];
      const functionExpressionData = preBuildConfig[appName]['function-expression.js'];

      const langFolderName = lang.slice(0, -5);
      if (!postBuildUiConfig[appName][langFolderName]) {
        postBuildUiConfig[appName][langFolderName] = {};
      }
      postBuildUiConfig[appName][langFolderName]['function-Expression.js'] =
        this.processFunctionExpressionJSFile2(
          languageConfigData.functionExpression,
          functionExpressionData
        );

      const appConfigFileName = `app-config-${langFolderName}.json`;
      const appConfigData = preBuildConfig[appName]['app-config.json'];
      postBuildUiConfig[appName][appConfigFileName] = this.processAppConfigFile(
        languageConfigData.config,
        appConfigData
      );

      const commonServicesFileName = `app-config-common-services-${langFolderName}.json`;
      const commonServicesFileData = preBuildConfig[appName]['app-config-common-services.json'];
      postBuildUiConfig[appName][commonServicesFileName] = this.processCommonServicesFile(
        languageConfigData.config,
        commonServicesFileData
      );

      const mainRoutesFileData = preBuildConfig[appName]['routes.json'];
      postBuildUiConfig[appName][langFolderName]['routes.json'] = this.processMainRoutesFile(
        languageConfigData.routes,
        mainRoutesFileData
      );

      const specialFileNames = [
        'languages',
        'app-config-common-services.json',
        'app-config.json',
        'function-expression.js',
        'routes.json'
      ];

      const topLevelFiles = Object.keys(preBuildConfig[appName]);

      topLevelFiles.forEach((tlf) => {
        if (!specialFileNames.includes(tlf)) {
          const screenConfigFileName = `routes.json`;
          const screenConfigFileData = preBuildConfig[appName][tlf]['routes.json'];
          if (!postBuildUiConfig[appName][tlf]) {
            postBuildUiConfig[appName][langFolderName][tlf] = {};
          }
          postBuildUiConfig[appName][langFolderName][tlf][screenConfigFileName] =
            this.processScreenRoutesFile(languageConfigData[tlf]['routes'], screenConfigFileData);

          // process include screens
          const routesData = postBuildUiConfig[appName][langFolderName][tlf]['routes.json'];

          routesData.routes.forEach((r: any) => {
            if (r['$includeScreen']) {
              const includeScreenPath = r['$includeScreen'];

              let screenData = this.getObjectValue(preBuildConfig[appName][tlf], includeScreenPath);

              // perform language replacements
              screenData = this.processIncludeScreenConfig(
                languageConfigData[tlf]['screens'],
                screenData
              );
              r.data = screenData.screen;

              //manage templates
              if (screenData.templates) {
                for (const template of screenData.templates) {
                  if (
                    routesData.templates.findIndex(
                      (routeTemplate: any) => routeTemplate.id === template.id
                    ) >= 0
                  ) {
                    throw new Error(
                      `Template '${template.id}' already exists in this routes file '${r.path}'`
                    );
                  } else {
                    routesData.templates.push(template);
                  }
                }
              }

              delete r['$includeScreen'];
            }
          });
        }
      });
    });
    return postBuildUiConfig;
  }

  private getObjectValue(obj: any, path: string) {
    let value = obj;
    const includeScreenPathAccess = path.split('/');
    includeScreenPathAccess.forEach((p) => {
      value = value[p];
    });

    return value;
  }

  private processFunctionExpressionJSFile2(languageConfigData: any, functionExpressionData: any) {
    // Process all replaces
    if (!!languageConfigData && languageConfigData.length > 0) {
      for (const ld of languageConfigData) {
        functionExpressionData = replaceString(functionExpressionData, ld.from, ld.to);
      }
    }
    return functionExpressionData;
  }

  private processAppConfigFile(languageConfigData: any, appConfigData: any) {
    let appConfigDataStringify = JSON.stringify(appConfigData);
    // Process all replaces
    if (!!languageConfigData && languageConfigData.length > 0) {
      for (const ld of languageConfigData) {
        appConfigDataStringify = replaceString(appConfigDataStringify, ld.from, ld.to);
      }
    }
    return JSON.parse(appConfigDataStringify);
  }

  private processCommonServicesFile(languageConfigData: any, commonServiceData: any) {
    let commonServiceDataStringify = JSON.stringify(commonServiceData);
    // Process all replaces
    if (!!languageConfigData && languageConfigData.length > 0) {
      for (const ld of languageConfigData) {
        commonServiceDataStringify = replaceString(commonServiceDataStringify, ld.from, ld.to);
      }
    }
    return JSON.parse(commonServiceDataStringify);
  }

  private processMainRoutesFile(languageConfigData: any, mainRoutesData: any) {
    let commonServiceDataStringify = JSON.stringify(mainRoutesData);
    // Process all replaces
    if (!!languageConfigData && languageConfigData.length > 0) {
      for (const ld of languageConfigData) {
        commonServiceDataStringify = replaceString(commonServiceDataStringify, ld.from, ld.to);
      }
    }
    return JSON.parse(commonServiceDataStringify);
  }

  private processScreenRoutesFile(languageConfigData: any, screenRoutesData: any) {
    let commonServiceDataStringify = JSON.stringify(screenRoutesData);
    // Process all replaces
    if (!!languageConfigData && languageConfigData.length > 0) {
      for (const ld of languageConfigData) {
        commonServiceDataStringify = replaceString(commonServiceDataStringify, ld.from, ld.to);
      }
    }
    return JSON.parse(commonServiceDataStringify);
  }

  private processIncludeScreenConfig(languageConfigData: any, screenRoutesData: any) {
    let commonServiceDataStringify = JSON.stringify(screenRoutesData);
    // Process all replaces
    if (!!languageConfigData && languageConfigData.length > 0) {
      for (const ld of languageConfigData) {
        commonServiceDataStringify = replaceString(commonServiceDataStringify, ld.from, ld.to);
      }
    }
    return JSON.parse(commonServiceDataStringify);
  }
}

export function replaceString(string: any, needle: any, replacement: any, options: any = {}) {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected input to be a string, got ${typeof string}`);
  }
  if (
    !(typeof needle === 'string' && needle.length > 0) ||
    !(typeof replacement === 'string' || typeof replacement === 'function')
  ) {
    return string;
  }

  let result = '';
  let matchCount = 0;
  let previousIndex = options.fromIndex > 0 ? options.fromIndex : 0;

  if (previousIndex > string.length) {
    return string;
  }

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const index = options.caseInsensitive
      ? string.toLowerCase().indexOf(needle.toLowerCase(), previousIndex)
      : string.indexOf(needle, previousIndex);

    if (index === -1) {
      break;
    }

    // eslint-disable-next-line no-plusplus
    matchCount++;

    const replaceString_ =
      typeof replacement === 'string'
        ? replacement
        : replacement(
            // If `caseInsensitive`` is enabled, the matched substring may be different from the needle.
            string.slice(index, index + needle.length),
            matchCount,
            string,
            index
          );

    // Get the initial part of the string on the first iteration.
    const beginSlice = matchCount === 1 ? 0 : previousIndex;

    result += string.slice(beginSlice, index) + replaceString_;

    previousIndex = index + needle.length;
  }

  if (matchCount === 0) {
    return string;
  }

  return result + string.slice(previousIndex);
}

export function getSafeFileName(fileName: string) {
  // eslint-disable-next-line no-useless-escape
  return fileName.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_');
}
