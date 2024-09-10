declare module '@repo/remix-app' {
  export function getPublicDir(): string
  export function getServerBuild(): Promise<any>
  export function startDevServer(app: any): Promise<void>
}
