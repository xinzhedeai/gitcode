package normalMapper;

import java.util.List;
import normalPo.SysFileInfo;
import normalPo.SysFileInfoExample;
import org.apache.ibatis.annotations.Param;

public interface SysFileInfoMapper {
    int countByExample(SysFileInfoExample example);

    int deleteByExample(SysFileInfoExample example);

    int deleteByPrimaryKey(String fileId);

    int insert(SysFileInfo record);

    int insertSelective(SysFileInfo record);

    List<SysFileInfo> selectByExample(SysFileInfoExample example);

    SysFileInfo selectByPrimaryKey(String fileId);

    int updateByExampleSelective(@Param("record") SysFileInfo record, @Param("example") SysFileInfoExample example);

    int updateByExample(@Param("record") SysFileInfo record, @Param("example") SysFileInfoExample example);

    int updateByPrimaryKeySelective(SysFileInfo record);

    int updateByPrimaryKey(SysFileInfo record);
}