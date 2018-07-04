# node-uber-cli
A command-line app to find time/price estimates of cabs provided by Uber.

# Usage:
1. To install the package, run `npm install -g node-uber-cli`
2. To see the available commands, type `uber --help`
3. To find `time` estimates, run `uber time <location>` and specify the location name you want.
4. To find `price` estimates, run `uber price -p <pickup> -d <drop>` and specify pickup and drop locations.
  ..*. You can use `uber price --pickup <picku> --drop <drop>` to find price estimates as well.
