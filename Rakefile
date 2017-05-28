task :default do
  build_mod
  deploy_mod_locally
end

def build_mod
  system 'webpack'
end

def deploy_mod_locally
  src_dir = Dir.pwd
  Dir.chdir directory_to_store_mod do
    make_dir('agile')
    make_dir('agile/build')

    move_file_to_game(src_dir, 'build/bundle.js')
    move_file_to_game(src_dir, 'package.json')
  end
end

def directory_to_store_mod
  game_dir_path = "~/Library/Application Support/Steam/steamapps/common/Game Dev Tycoon/Game Dev Tycoon.app/Contents/Resources/app.nw/mods"
  File.expand_path(game_dir_path)
end

def make_dir(dir_name)
  Dir.mkdir(dir_name) unless File.exists?(dir_name)
end

def move_file_to_game(src_dir, filename)
  file_src = File.join(src_dir, filename)
  file_dest = File.join(directory_to_store_mod, 'agile', filename)
  puts "Copying #{filename} to game"
  FileUtils.copy(file_src, file_dest)
end
