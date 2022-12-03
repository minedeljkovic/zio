FROM mcr.microsoft.com/devcontainers/java:11

RUN curl -fL https://github.com/coursier/launchers/raw/master/cs-x86_64-pc-linux.gz | gzip -d > cs && \
    chmod +x cs && \
    ./cs install cs && \
    echo 'export PATH="$PATH:$HOME/.local/share/coursier/bin"' >> ~/.bashrc && \
    ./cs install scala sbt scalafmt && \
    rm cs
