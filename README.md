# Prime Factorization Benchmark :abacus:

This repository contains a JS vs WASM prime factorization benchmark. The algorithm implemented both in JS and C is based on this [code](https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/). Finally, the C implementation is compiled to WASM four times: one with no optimizations and other tree with O1, O2, and O3 optimizations, respectively.

## Setup Emscripten

Install [Emscripten](https://emscripten.org/docs/getting_started/downloads.html) as shown below:

```bash
# Get the emsdk repo
git clone https://github.com/emscripten-core/emsdk.git

# Enter that directory
cd emsdk

# Download and install the latest SDK tools.
./emsdk install latest

# Make the "latest" SDK "active" for the current user. (writes .emscripten file)
./emsdk activate latest

# Activate PATH and other environment variables in the current terminal
source ./emsdk_env.sh
```

## Usage

### Compile code to WASM
The WASM binaries are already compiled at the `func/` directory. If you need to recompile them, just use:
```bash
./compile.sh
```

### Visualize benchmark
Now that you have your code compiled, you can start playing with this prime factorization. To do so, you will need to run a HTTP server at the root directory of this project using the following command:
```bash
python3 -m http.server
```

Once the http server is running, you can open your browser and go to `localhost:8000` or using the port showed on the terminal.

> [!NOTE]  
> If you are using Brave to see this benchmark, you may notice that the time associated to each prime factorization is always an integer. This happens because Brave has some flags for certain features. To disable this you need to open `brave://flags` on a new tab and search for the Round time stamps flag. Now you should be able to see much percise times when running this benchmark.
