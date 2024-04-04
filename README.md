# KURR.DEV

![Banner](https://github.com/kurrx/kurr.dev/blob/main/public/banner.jpg?raw=true)

## Overview

This is the repository of [my personal website](https://kurr.dev).

Initially project made with vanilla JavaScript, Webpack and Three.js back in 2019. This project originates from that time with some updates and improvements.

Current stack of the project: [TypeScript](https://typescriptlang.org), [React](https://react.dev/), [Three.js](https://threejs.org/), [React-Three-Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), [GSAP](https://gsap.com/), [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction).

## Getting Started

### Installation

```shell
# Clone git repository
git clone https://github.com/kurrx/kurr.dev.git
cd kurr.dev

# Install dependencies
npm install

# Start development server
npm run start
```

### Configuration

You can change information about yourself in `.env` file.

Music files are stored in `public/musics` directory. You can add your own musics to this directory. Also don't forget to update information about musics in `src/assets/index.ts` file. Respect intellectual property of others, credit music authors, do not use copyrighted music.

### Tweaking

Add [`#debug`](https://kurr.dev#debug) to url to enter Tweak Mode (Mockup Mode on dev server). This will show (hide on dev server) **Debug Menu** and **Performance Monitor** of 3D Scene. You can change settings and see the changes in real-time.

## WIP

This is not final shape of this project, it's still work in progress. I'm planning to add more features and improvements in the future. If you have any suggestions or ideas, feel free to open an issue or pull request. Currently I'm planning to add:

- About page
- Projects showcase
- Performance improvements

## License

The MIT License

Copyright (C) 2024 Kurbanali Ruslan <ruslan@kurr.dev>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
