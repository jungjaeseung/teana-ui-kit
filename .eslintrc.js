module.exports = {
  root: true,
  env: { browser: true, commonjs: true, es6: true, node: true },
  extends: ['airbnb', 'next', 'turbo', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error', // prettier의 포맷팅 에러를 lint 리포팅 에러로
      {
        arrowParens: 'always', // 화살표 함수 괄호 사용 방식 always: (message)=>{} avoid: message=>{}
        bracketSpacing: true, // 객체 리터럴에서 괄호 사이에 공백 출력
        endOfLine: 'lf', // 개행문자 CRLF/LF 자동 설정 (OS별로 처리 방식이 다름)
        jsxBracketSameLine: false, // JSX태그 >기호 한줄 아래에 표기할 지
        printWidth: 100, // 줄바꿈 길이 설정
        quoteProps: 'as-needed', // 객체 속성에 쿼테이션 적용 방식
        semi: true, // 명령문 끝에 세미콜론 추가
        singleQuote: true, // 작은 따옴표 사용
        useTabs: false, // tab 대신 space 사용,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn', // any사용불가
    'arrow-body-style': 1, // as-needed: 화살표 함수 한줄일 시 중괄호 필수 x, always: 무조건 중괄호
    camelcase: 'off',
    'comma-dangle': ['error', 'always-multiline'], // never: X, always: O(한줄이어도), always-multiline: 다른줄일경우 무조건, only-multiline: 이전과 차이 모르겠음
    'func-names': ['error', 'never'], // 표현식 함수 익명 가능
    'prefer-arrow-callback': ['error', { allowUnboundThis: false }],
    'import/extensions': [
      // import 오류 해결
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/newline-after-import': ['error', { count: 1, considerComments: true }], // import 뒤에 1줄 공백, 주석도 1줄 공백
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent', 'index'],
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'unkown'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': [2, { labelAttributes: ['htmlFor'] }], // label이 htmlFor 인식하게
    'jsx-a11y/click-events-have-key-events': 'off', // div에 onClick시 onKeyDown/onKeyUp/onKeyPress 함께 쓰거나 button으로 사용
    'jsx-a11y/no-noninteractive-element-interactions': 'off', // div, h1, p 등 인터렉티브한 엘리먼트가 아니면 onClick등 사용 불가
    'jsx-a11y/no-static-element-interactions': 'off', // div, h1, p 등 인터렉티브한 엘리먼트가 아니면 role을 인터렉티브하게 주어야 onClick사용 가능
    'max-len': [
      // 코드의 최대 길이 설정
      'error',
      {
        code: 500,
      },
    ],
    // 'no-await-in-loop': 'off', // 반복문 내에서 await 사용 금지, 사용하고싶다면 : Promise.all() / Promise.allSettled()
    'no-console': 'warn', // console.log()/console.warn()/console.error(): warning
    'no-else-return': 'off', // if구문에서 else에 return 사용 불가
    'no-loop-func': 'off', // loop 안에서 함수 선언시 함수 표현식 사용 금지
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off', // default-props 에러
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function'],
      },
    ],
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',

    'no-plusplus': 'off', // ++사용불가
    'no-underscore-dangle': 'off', // 변수명에 _사용불가
    'prefer-const': 'error', // 재할당 안할 경우 const로 정의
    'prefer-destructuring': 'off',
    'prefer-template': 'off', // `item : ${item}` 사용 강제
    'react/jsx-boolean-value': 'off', // 컴퍼넌트 prop 에서 조건문 등 보여줄 것이냐 아니면 컴퍼넌트 내에서 처리할 것이냐
    'react/jsx-props-no-spreading': 'off', // 가독성 문제, <MyCustomComponent {...props} /> 불가
    'react/no-this-in-sfc': 'off', // this 금지
    'react/prop-types': 'off', // props 타입 없으면 warning 2는 에러 0은 off
    'react/no-unknown-property': ['error', { ignore: ['css', 'droptype', 'datatype'] }], // 태그의 unknown property 사용 불가(ignore에 등록시 사용가능)
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }], // js파일에서 jsx사용시 오류인데 jsx사용시 파일확장자 jsx로 사용하는걸로 해결, tsx에선 jsx사용가능하게
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test.{ts,tsx}', // repos with a single test file
          'test-*.{ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.ts', // jest config
          '**/jest.setup.ts', // jest setup
        ],
        optionalDependencies: false,
      },
    ], // enable import from dev dependency for jest
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  ignorePatterns: ['build', 'dist', 'public', '*.config.js'],
  // "overrides": [
  //   {
  //     "files": [
  //       "./src/app/api/**/*.ts"
  //     ],
  //     "plugins": [
  //       "jsdoc"
  //     ],
  //     "rules": {
  //       "jsdoc/no-missing-syntax": [
  //         "error",
  //         {
  //           "contexts": [
  //             {
  //               "comment": "JsdocBlock:has(JsdocTag[tag=swagger])",
  //               "context": "any",
  //               "message": "@swagger 설정은 각 API에 반드시 존재하여야 합니다."
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   }
  // ]
};
