{pkgs ? import <nixpkgs> { }, ...}:
pkgs.mkShell {
  packages = with pkgs; [
    nodejs_22
    yarn
  ];

  shellHook = ''
    alias yarnx='yarn dlx'
  '';
}

